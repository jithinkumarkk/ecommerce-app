import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  path?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?:string
};

export default function Breadcrumb({ items,className }: BreadcrumbProps,) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ul className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && <span>/</span>}

            {item.path ? (
              <Link href={item.path} className="hover:text-black">
                {item.name}
              </Link>
            ) : (
              <span className="font-semibold text-black">{item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
