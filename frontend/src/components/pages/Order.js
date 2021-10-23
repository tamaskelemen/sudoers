import {Component} from "react";
import {Space, Table} from "antd";
import {orderList} from "../../client/api";
import {DeleteTwoTone, EditTwoTone, PauseCircleOutlined, PlayCircleOutlined} from "@ant-design/icons";

class Order extends Component {

    columns = [
        {
            title: 'From',
            dataIndex: 'from',
            key: 'from',
            align: 'center',
        },
        {
            title: 'To',
            dataIndex: 'to',
            key: 'to',
            align: 'center',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            align: 'center',
        },
        {
            title: 'Threshold',
            dataIndex: 'threshold',
            key: 'threshold',
            align: 'center',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
        },
        {
            title: 'Source',
            dataIndex: 'source',
            key: 'source',
            align: 'center',
        },
        {
            title: 'Target',
            dataIndex: 'target',
            key: 'target',
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (text, record) => (
                <Space size="middle">
                    <DeleteTwoTone style={{cursor: "pointer", fontSize: "16px", color: "#00b9ff"}}/>
                    <EditTwoTone style={{cursor: "pointer", fontSize: "16px", color: "#00b9ff"}}/>
                    {record.status == 'active' ? <PauseCircleOutlined
                        style={{cursor: "pointer", fontSize: "16px", color: "#00b9ff"}}/>
                        : <PlayCircleOutlined style={{cursor: "pointer", fontSize: "16px", color: "#00b9ff"}}/> }
                </Space>
            ),
        },
    ];

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
        return (
            <div>
                <Table dataSource={data} columns={this.columns} />
            </div>
        );
    }
}

export default Order;