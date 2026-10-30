import data from "../../data.json";

function KitchenPage(){

    console.log("data: ", data[1]);
    return(
        <>
            <div>
                <h1>Hello kitchen</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>powerLevel</th>
                        <th>cost</th>
                        <th>isActive</th>
                        <th>time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.powerLevel}</td>
                            <td>{item.cost}</td>
                            <td>{item.isActive ? "true" : "false"}</td>
                            <td>{item.time}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default KitchenPage;