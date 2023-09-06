import OnComponent from './OnComponent';
import OffComponent from './OffComponent';

export default function FanComponent(props) {
    const { isOn } = props;

    if (isOn) {
        return (
            <>
                <div>FanComponent</div>
                <OnComponent />
            </>
        )
    } else {
        return (
            <>
                <div>FanComponent</div>
                <OffComponent />
            </>
        )
    }
}
