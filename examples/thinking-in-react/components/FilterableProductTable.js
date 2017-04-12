import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props)

		this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
		this.handleInputStockInput = this.handleInStockInput.bind(this)
		this.state = {
			filterText: '',
			inStockOnly: false
		}
	}

	handleFilterTextInput(filterText) {
		this.setState({
			filterText: filterText
		})
	}

	handleInStockInput(inStockOnly) {
		this.setState({
			inStockOnly: inStockOnly
		})
	}
	render() {
		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onFilterTextInput={this.handleFilterTextInput}
				 	onInStockInput={this.handleInStockInput}
				 />
				<ProductTable 
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					products={this.props.products} 
				/>
			</div>
		)
	}
}

export default FilterableProductTable