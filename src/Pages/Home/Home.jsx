import { lazy } from "react";
const Presentation = lazy(() => import("./Presentation"));
const AlertMessage = lazy(() => import("./AlertMessage"));
const CustomerUsing = lazy(() => import("./CustomersUsing"));
const Compatibility = lazy(() => import("./Compatibility"));
const StartFree = lazy(() => import("./StartFree"));
const Activations = lazy(() => import("./Activations"));
const Description = lazy(() => import("./Description"));
const Suspensions = lazy(() => import("./Suspensions"));
const GeneralVideo = lazy(() => import("./GeneralVideo"));

export default function Home() {
    return (
        <div>
            <Presentation/>
            <AlertMessage/>
            <Compatibility/>
            <StartFree/>
            <Activations/>
             <Suspensions/>
             <GeneralVideo/>
             <Description/>
             <CustomerUsing/>
        </div>
    );
}