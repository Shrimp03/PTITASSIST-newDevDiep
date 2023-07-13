import styles from './itemSearchResult.module.scss'
import classNames from 'classnames/bind';

const cx=classNames.bind(styles)

function ItemResult() {
    return (
        <div className={cx('wrapper')}>
            <p>Toán rời rạc 1</p>
        </div>
    );
}

export default ItemResult;