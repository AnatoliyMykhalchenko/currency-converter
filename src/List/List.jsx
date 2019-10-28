import React from 'react';
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


class List extends React.Component {

	render() {
		return (
			<div style={{ width: "70%", margin: "50px auto" }}>
				<TextField
					id="outlined-search"
					label="Enter currency name"
					type="search"
					margin="normal"
					variant="outlined"
					style={{ width: "100%" }}
					onInput={this.searchCurrency.bind(this)}
				/>
				<Paper>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Currency</TableCell>
								<TableCell align="right">Purchase	</TableCell>
								<TableCell align="right">Sale</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.props.currencies.map(currency => (
								<TableRow key={currency.cc}>
									<TableCell component="th" scope="currency">
										{currency.txt}
									</TableCell>
									<TableCell align="right">{currency.rate}</TableCell>
									<TableCell align="right">{currency.r030}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Paper>
			</div>

		);
	}

	searchCurrency(e) {
		const str = e.target.value;
		this.props.searchCurrency(str);

	}


}

function mapStateToProps(state) {
	return {
		currencies: state.currencies
	}
};

function mapDispatchToProps(dispatch, event) {

	return {
		searchCurrency: (str) => {
			dispatch({ type: 'SEARCH_CURRENCIES', payload: str })
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(List);