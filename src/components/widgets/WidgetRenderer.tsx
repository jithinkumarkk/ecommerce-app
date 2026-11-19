import { WidgetRegistry, WidgetType } from "./WidgetRegistry";

type WidgetProps={
    id: number;
    type: WidgetType;
}
export default function WidgetRenderer({widget}: {widget:WidgetProps}){
    const Component =  WidgetRegistry[widget.type]
    if(!Component) return null;
    return <Component/>;
}