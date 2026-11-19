type SectionHeadingProps ={
    title:string;
    subTitle?:string;
}
export function SectionHeading({title,subTitle}:SectionHeadingProps) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold">{title}</h2> 
      {subTitle && <p className="mt-2 text-sm text-gray-500">{subTitle}</p>}
    </div>
  );
}
