import {Component, forwardRef} from "react";
import {orderList} from "../../client/api";
import {DeleteTwoTone, EditTwoTone, PauseCircleOutlined, PlayCircleOutlined} from "@ant-design/icons";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";

class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }

    componentDidMount() {
        orderList().then(response => {
            this.setState({
                dataSource: response.data
            })
        });
    }

    render() {
        let data = this.state.dataSource;
        console.log(data);
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" pageSize={5}
                       rowsPerPageOptions={[5]}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">From</TableCell>
                            <TableCell align="center">To</TableCell>
                            <TableCell align="center">Amount</TableCell>
                            <TableCell align="center">Threshold</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Source</TableCell>
                            <TableCell align="center">Target</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{row.from}</TableCell>
                                <TableCell align="center">{row.to}</TableCell>
                                <TableCell align="center">{row.amount}</TableCell>
                                <TableCell align="center">{row.threshold}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center">{row.source}</TableCell>
                                <TableCell align="center">{row.target}</TableCell>
                                <TableCell align="center">
                                    <DeleteTwoTone
                                        style={{cursor: "pointer", fontSize: "16px", color: "#00b9ff", padding: "10px"}}/>
                                     <EditTwoTone style={{cursor: "pointer", fontSize: "16px", color: "#00b9ff",
                                         padding: "10px"}}/>
                                         {row.status == 'active' ? <PauseCircleOutlined
                                             style={{cursor: "pointer", fontSize: "16px", color: "#00b9ff", padding: "10px"}}/>
                                             : <PlayCircleOutlined style={{cursor: "pointer", fontSize: "16px", color: "#00b9ff", padding: "10px"}}/> }

                                    </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={"113"}
                                rowsPerPage={"10"}
                                page={"0"}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        );
    }
}

export default Order;