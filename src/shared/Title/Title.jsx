import cls from './title.module.scss';

export const Title = ({ title, Tag = 'h1', className }) => {
    return (
        <div className={cls.titleWrapper}>
            <Tag className={className}>{title}</Tag>
        </div>
    );
};
