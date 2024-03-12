import { Suspense } from "react";
import CustomerUsing from "./CustomersUsing";
import AlertMessage from "./AlertPayment/AlertMessage";
import Compatibility from "./Compatibility";
import StartFree from "./StartFree";
import Activations from "./Activations";
import Presentation from "./Presentation";
import Description from "./Description";
import GeneralVideo from "./GeneralVideo";
import Suspensions from "./Suspensions";
import Loader from "../Loaders/Loader";

export default function Home() {
    return (
        <>
            <Presentation/>
            <CustomerUsing/>
            <AlertMessage/>
            <Compatibility/>
            <StartFree/>
            <Activations/>
            <Description/>
            <Suspensions/>
            <GeneralVideo/>
        </>
    );
}