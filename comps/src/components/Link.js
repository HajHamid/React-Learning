import classNames from 'classnames'
import useNavigation from '../hooks/use-navigation'

function Link({ to, children, className, activeClassName }) {
    const { currentPath, navigate } = useNavigation()

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault()

        navigate(to)
    }

    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
    )

    return (
        <a href={to} onClick={handleClick} className={classes}>{children}</a>
    )
}

export default Link