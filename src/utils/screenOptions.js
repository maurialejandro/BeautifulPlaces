import {Icon} from "@rneui/base";

export function screenOptions(focused, route, color, size) {
    let iconName;
    switch(route.name) {
        case "Cuenta":
            iconName = focused
                ? 'account-circle'
                : 'account-circle-outline';
            break;
        case "Mis Lugares":
            iconName = focused
                ? "emoticon-cool"
                : "emoticon-cool-outline"
            break;
        case "Explorar":
            iconName = focused
                ? "map-search"
                : "map-search-outline"
            break;
        case "Favoritos":
            iconName = focused
                ? "heart"
                : "heart-outline"
            break;
        case "Ranking":
            iconName = focused
                ? "star-circle"
                : "star-circle-outline"
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={size} color={color} />
    )
}