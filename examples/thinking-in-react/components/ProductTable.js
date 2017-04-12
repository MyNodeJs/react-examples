import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
	render() {
		var rows = [];
		var lastCategory = null;

		this.props.products.forEach((product, index) => {
			if(product.name.indexOf(this.props.filterText) === -1 || 
				(!product.stocked && this.props.inStockOnly)) {
				return
			}
			if(product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={index} />)
			}

			rows.push(<ProductRow product={product} key={index + 'ProductRow'} />)
			lastCategory = product.category;
		})

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}

export default ProductTable