interface NavAttributes {
    [propName: string]: any;
  }
  interface NavWrapper {
    attributes: NavAttributes;
    element: string;
  }
  interface NavBadge {
    text: string;
    variant: string;
  }
  interface NavLabel {
    class?: string;
    variant: string;
  }
  
  export interface NavData {
    name?: string;
    url?: string;
    icon?: string;
    badge?: NavBadge;
    title?: boolean;
    children?: NavData[];
    variant?: string;
    attributes?: NavAttributes;
    divider?: boolean;
    class?: string;
    label?: NavLabel;
    wrapper?: NavWrapper;
  }
  
  export const navItemsFoodXpress: NavData[] = [

    {
      name: 'Merchant',
      url: '/merchant',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Marchant List',
          url: '/merchant/merchant',
          icon: 'icon-cursor'
        },
        {
          name: 'Add Marchant ',
          url: '/merchant/add-merchant',
          icon: 'icon-cursor'
        },
  
      ]
    },
  
  ];
  