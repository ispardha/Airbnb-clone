'use client';

interface MenuItemsProps {
    onclick: () => void;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return (
        <div
        onClick={onClick}
        className="
        px-4
        py-3
        hover:bg-neutral-100
        transition
        font-semibold"></div>
    )
    
}

const MenuItem = () => {
    return ( 
        <div>

        </div>
    );
} 

export default MenuItem;