import React from 'react';
import {Link} from 'react-router';
import {Icon} from 'antd';

import './subMenu.less';

class SideMenu extends React.Component {
    static propTypes = {
        style: React.PropTypes.object,
        className: React.PropTypes.string,
        title: React.PropTypes.string,
        subMenus: React.PropTypes.array,
        onChange: React.PropTypes.func,
    };

    static defaultProps = {
        style: {},
        className: '',
        subMenus: [],
        onChange() {
        },
    };

    render() {
        const props = this.props;
        return (
            <div className={props.className}>
                <h3 className="sideMenu-title">{props.title}</h3>
                <ul className='sideMenu-ul'>
                    {
                        props.subMenus.map(item =>
                            <li
                                className='sideMenu-li'
                                key={item.key}
                            >
                                <Link to={item.menu.href}
                                      className="sideMenu-link"
                                      activeClassName='active'
                                >
                                    <span className="sideMenu-icon">
                                        <Icon type={item.menu.icon}/>
                                    </span>{item.menu.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default SideMenu;