import React from 'react'
import Ban3 from '../Images/ban3.png'

const table = () => {
    const data = [
        {
            id: "1", 
            img: "",
            name: " wazirx",
            LTP: " 75684756",
            buy: " 345345",
            diff: "45%",
            saving: " 345345"
        },
        {
            id: "2",
            img: "",
            name: "BITbns",
            LTP: "34534",
            buy: " 345345/345345",
            diff: "45%",
            saving: "3453 "
        },
        {
            id: "3",
            img: "",
            name: "Giotus",
            LTP: "345345 ",
            buy: " 34534/53535",
            diff: "45%",
            saving: "45666 "
        },
        {
            id: "4",
            img: "",
            name: " Colodax",
            LTP: "45354354 ",
            buy: "3535/334 ",
            diff: "56%",
            saving: "34554 "
        },
        {
            id: "5",
            img: "",
            name: "Zebpay ",
            LTP: "5645646",
            buy: "45656/456 ",
            diff: "54%",
            saving: "3425 "
        },
        {
            id: "6",
            img: "",
            name: "Coinxd ",
            LTP: "e345546 ",
            buy: " 345/34566",
            diff: "34%",
            saving: "345 "
        },

    ]
    //      {data.from({ length: 6 }).map((_, index) => (
    //     < td key = { index } > Table cell { index }</td>
    //   ))}
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Platform</th>
                        <th scope="col">Last Trade Price</th>
                        <th scope="col">Buy/sell Prics</th>
                        <th scope="col">Difference</th>
                        <th scope="col">Savings</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        data.map((index) => (<tr>
                            <th scope="row">{index.id}</th>
                            <td>{index.name}</td>
                            <td>{index.LTP}</td>
                            <td>{index.buy}</td>
                            <td>{index.diff}</td>
                            <td>{index.saving}</td>
                        </tr>))
                    }
                  
                </tbody>
            </table>
            <img className="responsive" width="600" height="400"src={Ban3}></img>
<hr/>
        </div>
    )
}

export default table
