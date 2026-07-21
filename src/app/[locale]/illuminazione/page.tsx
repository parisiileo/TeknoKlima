import { createServiceRoute } from "@/lib/service-page";

const route = createServiceRoute("illuminazione", "illuminazione");

export const generateMetadata = route.generateMetadata;
export default route.Page;
