import {Component} from "react";
import {Table} from "antd";
import {orderList} from "../../client/api";

class Order extends Component {

    columns = [
        {
            title: 'From',
            dataIndex: 'from',
            key: 'from',
        },
        {
            title: 'To',
            dataIndex: 'to',
            key: 'to',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Threshold',
            dataIndex: 'threshold',
            key: 'threshold',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Source',
            dataIndex: 'source',
            key: 'source',
        },
        {
            title: 'Target',
            dataIndex: 'target',
            key: 'target',
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
        console.log(this.state)
        let data = this.state.dataSource;
        return (
            <div>
                <Table dataSource={data} columns={this.columns} />
            </div>
        );
    }
}

export default Order;