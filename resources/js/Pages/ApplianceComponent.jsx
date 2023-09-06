import FanComponent from "./FanComponent";
import FanCountComponent from "./FanCountComponent";

export default function ApplianceComponent() {
    return (
        <>
            <div>ApplianceComponent</div>
            <FanComponent isOn={false} />
            <FanCountComponent totalFan={11} />
        </>

    )
}
