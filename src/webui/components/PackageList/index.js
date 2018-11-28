import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Package from '../Package';
import Help from '../Help';
import { formatLicense } from '../../utils/package';

import classes from './packageList.scss';

export default class PackageList extends React.Component {
  static propTypes = {
    packages: PropTypes.array,
    help: PropTypes.bool
  };

  renderPackages = () => {
    const { packages } = this.props;
    return (
      packages.length > 0 ? (
        <Fragment>
          <h1 className={classes.listTitle}>Available Packages</h1>
          {this.renderList()}
        </Fragment>
      ) : null
    );
  }

  renderList = () => {
    const { packages } = this.props;
    return (
      packages.map((pkg, i) => (
        <Package key={i} {...pkg} name={pkg.label} license={formatLicense(pkg.license)} />
      ))
    );
  }

  render() {
    const { help } = this.props;
    return (
      <div className="package-list-items">
        <div className={classes.pkgContainer}>
          {help ? <Help /> : this.renderPackages()}
        </div>
      </div>
    );
  }
}
