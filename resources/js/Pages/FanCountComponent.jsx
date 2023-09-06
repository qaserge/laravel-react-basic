export default function FanCountComponent(props) {

    const { totalFan } = props;

    return (
        <>
            <div>FanCountComponent</div>
            <b>Fans</b>
            {totalFan > 0 && <h2>You have {totalFan} fans in your house </h2>}
        </>
    )
}
