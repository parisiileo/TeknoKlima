import { createServiceRoute } from "@/lib/service-page";

const route = createServiceRoute("impianti-elettrici", "impiantiElettrici");

export const generateMetadata = route.generateMetadata;
export default route.Page;
