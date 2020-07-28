import React, { Component } from 'react';
import { connect } from 'react-redux'; // Connects this component to the Redux store that's provided by Provider component
import { fetchQuotes } from '../actions/quoteActions';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'w3-css/w3.css';
import Loader from '../Loader';
import '../Loader.css';
import CustomHeaderGroup from './customHeaderGroup.js';
import PropTypes from 'prop-types';
import numeral from 'numeral';

// Component to display quotes fetched in dynamically updated data grid
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {
                    headerName: 'Rate Quote',
                    headerGroupComponent: 'customHeaderGroupComponent',
                    children: [
                        {
                            headerName: 'LENDER',
                            field: 'lenderName',
                            sortable: true,
                            width: 310,
                        },
                        {
                            headerName: 'PRODUCT',
                            field: 'loanType',
                            width: 120,
                        },
                        {
                            headerName: 'RATE',
                            field: 'interestRate',
                            sortable: true,
                            width: 100,
                            comparator: this.numberComparator,
                            valueFormatter: this.percentFormatter,
                        },
                        {
                            headerName: 'CLOSING COSTS',
                            field: 'closingCosts',
                            sortable: true,
                            width: 150,
                            comparator: this.numberComparator,
                            valueFormatter: this.dollarFormatter0dec,
                        },
                        {
                            headerName: 'MONTHLY PAYMENT',
                            field: 'monthlyPayment',
                            sortable: true,
                            width: 150,
                            comparator: this.numberComparator,
                            valueFormatter: this.dollarFormatter0dec,
                        },
                        {
                            headerName: 'APR',
                            field: 'apr',
                            sortable: true,
                            width: 100,
                            comparator: this.numberComparator,
                            valueFormatter: this.percentFormatter,
                        },
                    ],
                },
            ],
            statusBar: {
                statusPanels: [
                    {
                        statusPanel: 'agTotalRowCountComponent',
                        align: 'left',
                    },
                    { statusPanel: 'agFilteredRowCountComponent' },
                    { statusPanel: 'agSelectedRowCountComponent' },
                    { statusPanel: 'agAggregationComponent' },
                ],
            },
            groupHeaderHeight: 74,
            headerHeight: 50,
            defaultColDef: {
                sortable: true,
                filter: true,
                width: 101,
                resizable: true,
            },
            frameworkComponents: {
                customHeaderGroupComponent: CustomHeaderGroup,
            },
            show: false,
            isLoading: false,
            error: null,
        };
    }

    onGridReady = (params) => {
        this.setState({ isLoading: false });
        this.gridApi = params.api;
        this.gridApi.setHeaderHeight(63);
        this.gridApi.hideOverlay();
    };

    numberComparator(valueA, valueB, nodeA, nodeB, isInverted) {
        return parseFloat(valueA) - parseFloat(valueB);
    }

    percentFormatter(params) {
        // params.data - full row data
        // params.value - cell value
        // here you can handle how certain cell data would be displayed on the grid
        if (typeof params.value === 'undefined') return '';
        let theValue = parseFloat(params.value);

        if (isNaN(theValue)) {
            return '';
        }

        return numeral(theValue).format('0,0.000') + '%';
    }

    dollarFormatter0dec(params) {
        // params.data - full row data
        // params.value - cell value
        // here you can handle how certain cell data would be displayed on the grid
        if (typeof params.value === 'undefined') return '';
        let theValue = parseFloat(params.value);

        if (isNaN(theValue)) {
            return '';
        }

        return '$' + numeral(theValue).format('0,0');
    }

    render() {
        const { isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <Loader />;
        }

        return (
            <div className='ag-theme-alpine Grid-panel'>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    animateRows={true}
                    frameworkComponents={this.state.frameworkComponents}
                    groupHeaderHeight={this.state.groupHeaderHeight}
                    headerHeight={this.state.headerHeight}
                    defaultColDef={this.state.defaultColDef}
                    rowData={this.props.quotes}
                    statusBar={this.state.statusBar}
                    onGridReady={this.onGridReady}
                ></AgGridReact>
            </div>
        );
    }
}

Posts.propTypes = {
    fetchQuotes: PropTypes.func.isRequired,
    quotes: PropTypes.array,
};

// Get new items from the state from Redux - map our state to our properties
// The field name 'quotes' matches the name used in our reducer -> see ../reducers/index.js
const mapStateToProps = (state) => ({
    quotes: state.quotes.items.rateQuotes,
});

export default connect(mapStateToProps, { fetchQuotes })(Posts);
