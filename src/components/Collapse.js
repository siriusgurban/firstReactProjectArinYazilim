import React from "react";

// const Collapse = (props) => {
//     return (
//         <div>

//             <a class="btn btn-primary w-100" data-toggle="collapse" href={'#'.concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
//                 Link with href
//             </a>

//             <div class="collapse show" id={props.href}>

//                 {props.children}

//             </div>  

//         </div>

//     );
// };


class Collapse extends React.Component {
    constructor() {
        super();

        this.state = {
            showContent: true
        }
    }

    showMore = () => {
        this.setState({ showContent: !this.state.showContent })
    }

    render() {
        return (
            <div>

                <a className="btn btn-primary w-100" onMouseDown={this.showMore}>
                    {React.Children.map(this.props.children, children => children.props.cardTitle)}
                </a>


                {this.state.showContent ? (
                    <div className="collapse show">

                        {React.Children.map(this.props.children, children => children)}
                        {/* {this.props.children} */}

                    </div>
                ) : null

                }



            </div>

        );
    }

}

export default Collapse;