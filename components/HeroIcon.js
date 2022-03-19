// !NOTE for future reference: from github.com/tailwindlabs/heroicons/issues/278

import * as SolidIcons from '@heroicons/react/solid'
import * as OutlineIcons from '@heroicons/react/outline'

export const HeroIcon = (props) => {
    const {icon, className = "w-6 h-6", ouline = false} = props;
    const Icon = outline ? OutlineIcons[icon] : SolidIcons[icons];
    return <Icon className={className} />;
}