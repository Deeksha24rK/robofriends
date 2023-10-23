import Card from "./Card.js"

const CardList = ({ robots }) => {
    return (
        <>
            {robots.map(robot => {
                return (
                    <Card
                        key={robot.id}
                        id={robot.id}
                        name={robot.name}
                        email={robot.email}
                    />
                );
            })}
        </>
    );
}

export default CardList;