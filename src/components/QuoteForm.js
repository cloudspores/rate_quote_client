import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { connect } from 'react-redux'; // Connects this component to the Redux store that's provided by Provider component
import { fetchQuotes } from '../actions/quoteActions';

/**
 * Capture quote query parameters for submission to service
 */
class QuoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loanSize: '',
            propertyType: '',
            creditScore: '',
            occupancy: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Load API key from config file
        
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const params = {
            loanSize: this.state.loanSize,
            propertyType: this.state.propertyType,
            creditScore: this.state.creditScore,
            occupancy: this.state.occupancy,
        };

        // Call action
        // This fetchQuotes() is going to be placed into a prop
        this.props.fetchQuotes(params);
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.onSubmit}>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='loanSize'>Loan Size</label>
                            <input
                                type='text'
                                className='form-control'
                                name='loanSize'
                                onChange={this.onChange}
                                value={this.state.loanSize}
                                id='loanSize'
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <label htmlFor='propertyType'>Property Type</label>
                            <select
                                id='propertyType'
                                className='form-control'
                                name='propertyType'
                                onChange={this.onChange}
                                value={this.state.propertyType}
                            >
                                <option defaultValue>Choose...</option>
                                <option value='SingleFamily'>
                                    Single Family
                                </option>
                                <option value='Condo'>Condo</option>
                                <option value='Townhouse'>Townhouse</option>
                                <option value='MultiFamily'>MultiFamily</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='creditScore'>Credit Score</label>
                            <input
                                type='text'
                                className='form-control'
                                name='creditScore'
                                onChange={this.onChange}
                                value={this.state.creditScore}
                                id='creditScore'
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <label htmlFor='occupancy'>Occupancy</label>
                            <select
                                id='occupancy'
                                className='form-control'
                                name='occupancy'
                                onChange={this.onChange}
                                value={this.state.occupancy}
                            >
                                <option defaultValue>Choose...</option>
                                <option value='Primary'>Primary</option>
                                <option value='Secondary'>Secondary</option>
                                <option value='Investment'>Investment</option>
                            </select>
                        </div>
                    </div>
                    <div
                        className='form-group row text-white text-right'
                        style={{
                            height: '100%',
                            float: 'right',
                        }}
                    >
                        <button
                            className='btn btn-primary'
                            type='submit'
                            style={{
                                height: '100%',
                                float: 'right',
                            }}
                        >
                            Quote Rates
                        </button>
                    </div>
                </form>
            </Container>
        );
    }
}

QuoteForm.propTypes = {
    fetchQuotes: PropTypes.func.isRequired
};

export default connect(null, { fetchQuotes })(QuoteForm);
