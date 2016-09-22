const React = require('react')




class Product extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.producer}</li>
                    <li>{this.props.color}</li>
                    <li>{this.props.weight}</li>
                </ul>
            </div>
            )
    }


}

Product.defaultProps = {
    hasWatermark: false
}



Product.propTypes = {
    name: React.PropTypes.string.isRequired,
    hasWatermark: React.PropTypes.bool,

    weight: (props, propName) => {
        const weight = props[propName];
        const range = weight > 80 && weight < 300;

        if (weight === undefined) {
            return new Error('There is no weight.');
        }


        if (isNaN(weight)) {
            return new Error('The weight is not a number.');
        }


        if (!range) {
            return new Error('The weight is not in range.');
        }

    },
    color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    producer: React.PropTypes.string

}

module.exports = Product
