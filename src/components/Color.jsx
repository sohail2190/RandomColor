import React from 'react'

class Color extends React.Component {
    render() {
        const { hexCode } = this.props;
        const style = {
            backgroundColor: hexCode
        };

        return (
            <div>
                <div className='color' style={style} onClick={() => this.props.update(this.props.index)}>
                    {hexCode}
                </div>
            </div>
        )
    }
}

export default Color
