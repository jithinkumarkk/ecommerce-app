type TooltipOptions = {
    duration?: number;
    border?: string;
    backgroundColor?: string;
    messageColor?: string;
    messageBackground?: string;
    messageBorder?: string;
    blink?: boolean;
  };
  
  const activeTooltips = new Map<string, () => void>();
  
  export function showTooltip(
    elementId: string,
    message: string,
    options: TooltipOptions = {}
  ) {
    const {
      duration = 3000,
      border = "0px solid #ef4444",
      backgroundColor = "#fef2f2",
      messageColor = "#ffffff",
      messageBackground = "#dc2626",
      messageBorder = "none",
      blink = true,
    } = options;
  
    const target = document.getElementById(elementId);
  
    if (!target) return;
  
    // Remove previous tooltip
    hideTooltip(elementId);
  
    // Save original styles
    const originalBorder = target.style.border;
    const originalBackground = target.style.backgroundColor;
  
    // Apply target styles
    target.style.border = border;
    target.style.backgroundColor = backgroundColor;
  
    // Create tooltip
    const tooltip = document.createElement("div");
  
    tooltip.id = `${elementId}-tooltip`;
    tooltip.textContent = message;
    tooltip.setAttribute("role", "alert");
  
    tooltip.className = `
      fixed z-[9999] inline-block rounded-lg
      px-3 py-2 text-sm font-medium shadow-lg
      pointer-events-none
      ${blink ? "animate-blink" : ""}
    `;
  
    // Add tooltip arrow
    tooltip.insertAdjacentHTML(
      "beforeend",
      '<div class="tooltip-arrow"></div>'
    );
  
    // Get target position
    const rect = target.getBoundingClientRect();
  
    Object.assign(tooltip.style, {
      color: messageColor,
      backgroundColor: messageBackground,
      border: messageBorder,
      left: `${rect.left + rect.width / 2}px`,
      top: `${rect.top - 8}px`,
      transform: "translate(-50%, -100%)",
    });
  
    document.body.appendChild(tooltip);
  
    // Remove tooltip and restore original styles
    const cleanup = () => {
      clearTimeout(timer);
  
      tooltip.remove();
  
      target.style.border = originalBorder;
      target.style.backgroundColor = originalBackground;
  
      activeTooltips.delete(elementId);
    };
  
    const timer = setTimeout(cleanup, duration);
  
    activeTooltips.set(elementId, cleanup);
  }
  
  export function hideTooltip(elementId: string) {
    activeTooltips.get(elementId)?.();
  }