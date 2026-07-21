import { createServiceRoute } from "@/lib/service-page";

const route = createServiceRoute("climatizzazione", "climatizzazione");

export const generateMetadata = route.generateMetadata;
export default route.Page;
