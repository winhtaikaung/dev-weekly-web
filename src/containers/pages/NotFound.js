import React from 'react';
import {Link} from 'react-router';

export default class NotFound extends React.Component {
    render() {
        return (
            <main ref="main" className="gray">
                <div className="content">
                    <div className="row">
                        <div className="columns small-12 small-centered">
                            <h1>Page Not Found</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="columns small-12 small-centred"></div>
                    </div>
                    <div className="row">
                        <div className="columns small-12 small-centered">
                            <Link to={`/`} className="button pill white">Back Home</Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
