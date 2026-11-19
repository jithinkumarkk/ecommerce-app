import WidgetRenderer from "../widgets/WidgetRenderer"; 
export function HomePageRenderer(){
    return(
        <>
        <WidgetRenderer widget={{ id: 1, type: "bannerCarousel" }} />
        <WidgetRenderer widget={{ id: 2, type: "productGrid" }}/>
        </>
    )
}