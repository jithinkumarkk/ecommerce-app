export function animateFlyToTarget(
  sourceId: string,
  targetId: string
) {
  const source = document.getElementById(sourceId); /* Product image ID */
  const target = document.getElementById(targetId); /* Cart icon ID */

  if (!source || !target) return;

  const start = source.getBoundingClientRect();
  const end   = target.getBoundingClientRect();
  console.log(start, end);

  const x = end.left + end.width / 2  - (start.left + start.width / 2);
  const y = end.top + end.height / 2  - (start.top + start.height / 2);
  console.log(x, y);

  const clone = source.cloneNode(true) as HTMLElement;
  clone.removeAttribute("id");
  clone.setAttribute("aria-hidden", "true");

  Object.assign(clone.style, {
    position: "fixed",
    left: `${start.left}px`,
    top: `${start.top}px`,
    width: `${start.width}px`,
    height: `${start.height}px`,
    zIndex: "9999",
    pointerEvents: "none",
  });
  
  document.body.appendChild(clone);
  

  const animation = clone.animate(
    [
      {
        transform: `
          perspective(800px)
          translate(0px, 0px)
          rotateX(0deg)
          rotateZ(0deg)
          scale(1, 1)
        `,
        opacity: 1,
        offset: 0,
      },
      {
        transform: `
          perspective(800px)
          translate(${x * 0.08}px, -14px)
          rotateX(25deg)
          rotateZ(-8deg)
          scale(0.85, 0.65)
        `,
        opacity: 1,
        offset: 0.2,
      },
      {
        transform: `
          perspective(800px)
          translate(${x * 0.65}px, ${y * 0.65 - 40}px)
          rotateX(10deg)
          rotateZ(-14deg)
          scale(0.3, 0.22)
        `,
        opacity: 1,
        offset: 0.65,
      },
      {
        transform: `
          perspective(800px)
          translate(${x * 0.94}px, ${y * 0.94}px)
          rotateX(0deg)
          rotateZ(0deg)
          scale(0.12, 0.1)
        `,
        opacity: 1,
        offset: 0.88,
      },
      {
        transform: `
          perspective(800px)
          translate(${x}px, ${y}px)
          rotateX(0deg)
          rotateZ(0deg)
          scale(0.04, 0.04)
        `,
        opacity: 0,
        offset: 1,
      },
    ],
    {
      duration: 700,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards",
    }
  );
  
  animation.onfinish = () => {
    clone.remove();
  };
  animation.oncancel = () => {
    clone.remove();
  };

}