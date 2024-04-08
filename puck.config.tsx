import type { Config } from "@measured/puck";
import { Button, ButtonProps, MastHead } from "./app/components";
import { Card, CardProps } from "./app/components/blocks/Card";
import { Columns, ColumnsProps } from "./app/components/blocks/Columns";
import { Flex, FlexProps } from "./app/components/blocks/Flex";
import { Text, TextProps } from "./app/components/blocks/Text";
import {
  VerticalSpace,
  VerticalSpaceProps,
} from "./app/components/blocks/VerticalSpace";

import { Root, RootProps } from "./app/components/layout/root-layout";
import { Separator, SeparatorProps } from "app/components/ui/separator";
import { Input, InputProps } from "app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "app/components/ui/select";
import { RadioGroup, RadioGroupItem } from "app/components/ui/radio-group";
import { Label } from "app/components/ui/label";
import {
  SwitchButton,
  SwitchButtonProps,
} from "app/components/ui/switch-button";
import { CardNDIS, ICardNDIS } from "app/components/ui/cardNDIS";
import { CardNDISWithDate, ICardNDISWithDate } from "app/components/ui/cardNDISWithDate";
import { CardNDISBasic, ICardNDISBasic } from "app/components/ui/cardNDISBasic";
import { ButtonNDIS, IButtonNDIS } from "app/components/ui/buttonNDIS";
import { AccordionNDIS, IAccordionNDIS } from "app/components/ui/accordionNDIS";
import { HeroBannerNDIS, IHeroBannerNDIS } from "app/components/ui/heroBannerNDIS";
import { BreadcrumbsNDIS, IBreadcrumbsNDIS } from "app/components/ui/breadcrumbsNDIS";
import { FileUploadNDIS, IFileUploadNDIS } from "app/components/ui/fileUploadNDIS";
import { FooterNDIS, IFooterNDIS } from "app/components/ui/footerNDIS";
import { HeaderNDIS } from "app/components/ui/headerNDIS";
import { DropdownNDIS } from "app/components/ui/dropdownNDIS";

type Props = {
  Card: CardProps;
  Columns: ColumnsProps;
  Flex: FlexProps;
  Text: TextProps;
  VerticalSpace: VerticalSpaceProps;

  HeadingBlock: { title: string };
  MastHead: {};
  Button: ButtonProps;
  Separator: SeparatorProps;
  CardNDIS: ICardNDIS,
  CardNDISBASIC: ICardNDISBasic,
  CardNDISWithDate: ICardNDISWithDate,
  ButtonNDIS: IButtonNDIS
  AccordionNDIS: IAccordionNDIS
  HeroBannerNDIS: IHeroBannerNDIS
  BreadcrumbsNDIS: IBreadcrumbsNDIS
  FileUploadNDIS: IFileUploadNDIS,
  FooterNDIS: IFooterNDIS
};

export type UserConfig = Config<
  Props,
  RootProps,
  "layout" | "typography" | "interactive"
>;

// We avoid the name config as next gets confused
export const conf: UserConfig = {
  root: {
    render: Root,
  },
  categories: {
    layout: {
      components: ["Columns", "Flex", "VerticalSpace"],
    },
    typography: {
      components: ["Text"],
    },
    interactive: {
      title: "Actions",
    },
  },
  components: {
    Card,
    Columns,
    Flex,
    Text,
    VerticalSpace,
    CardNDIS: {
      render: (props) => <CardNDIS {...props} />,
      fields: {
        title: { type: "text" },
        text: { type: "text" },
        variant: {
          type: "radio",
          options: [
            { value: "major", label: "major" },
            { value: "minor", label: "minor" },
            { value: "outlined", label: "Outlined" },
            { value: "blue", label: "Blue" }
          ]
        }
      },
      defaultProps: {
        title: "Active kids",
        text: "$100 voucher for children's sport, fitness and recreation.",
        variant: "major"
      }
    },

    CardNDISBasic: {
      render: (props) => <CardNDISBasic {...props} />,
      fields: {
        title: { type: "text" },
        variant: {
          type: "radio",
          options: [
            { value: "outlined", label: "Outlined" },
            { value: "blue", label: "Blue" }
          ]
        }
      },
      defaultProps: {
        title: "Active kids",
        variant: "outlined"
      }
    },

    CardNDISWithDate: {
      render: (props) => <CardNDISWithDate {...props} />,
      fields: {
        category: { type: "text" },
        date: { type: "text" },
        title: { type: "text" },
        text: { type: "text" },
        variant: {
          type: "radio",
          options: [
            { value: "major", label: "major" },
            { value: "minor", label: "minor" },
            { value: "outlined", label: "Outlined" },
            { value: "blue", label: "Blue" }
          ]
        }
      },
      defaultProps: {
        category: "Family",
        date: "2 Sep 2020",
        title: "Active kids",
        text: "$100 voucher for children's sport, fitness and recreation.",
        variant: "major"
      }
    },

    ButtonNDIS: {
      render: (props) => <ButtonNDIS {...props} />,
      fields: {
        label: { type: "text" },
        variant: {
          type: "radio",
          options: [
            { value: "outlined", label: "Outlined" },
            { value: "blue", label: "Blue" },
            { value: "outlined-disabled", label: "Outlined disabled" },
            { value: "blue-disabled", label: "Blue disabled" },
            { value: "outlined-with-icon", label: "Outlined with icon" },
            { value: "blue-with-icon", label: "Blue with icon" },
            { value: "outlined-with-icon-disabled", label: "Outlined with icon disabled" },
            { value: "blue-with-icon-disabled", label: "Blue with icon disabled" }
          ]
        }
      },
      defaultProps: {
        label: "Button",
        variant: "blue"
      }
    },

    AccordionNDIS: {
      render: (props) => <AccordionNDIS {...props} />,
      fields: {
        title: { type: "text" },
        text: { type: "text" },
        size: {
          type: "radio",
          options: [
            { value: "full", label: "full" },
            { value: "xl", label: "xl" },
            { value: "sm", label: "sm" },
          ]
        }
      },
      defaultProps: {
        title: "Writing for inclusivity",
        text: "Australia is one of the most culturally diverse countries in the world so it's important to write for people from all backgrounds.",
        size: 'full'
      }
    },

    HeroBannerNDIS: {
      render: (props) => <HeroBannerNDIS {...props} />,
      fields: {
        title: { type: "text" },
        text: { type: "text" },
        buttonText: { type: "text" },
        variant: {
          type: "radio",
          options: [
            { value: "white", label: "White" },
            { value: "blue", label: "Blue" },
          ]
        }
      },
      defaultProps: {
        title: "Helping you deliver great government services",
        text: "Find the building blocks for creating user-centred digital services, as well as policy, tools and guidance",
        buttonText: "View Digital Service Toolkit",
        variant: "white"
      }
    },

    BreadcrumbsNDIS: {
      render: (props) => <BreadcrumbsNDIS {...props} />,
      fields: {
        breadcrumbsLabels: {
          type: 'array',
          arrayFields: {
            label: { type: 'text' },
          }
        }
      },
      defaultProps: {
        breadcrumbsLabels: [{ label: 'Home' }, { label: 'Parent' }, { label: 'Parent' }, { label: 'Parent' }, { label: 'Current Page' }]
      }
    },

    FileUploadNDIS: {
      render: (props) => <FileUploadNDIS {...props} />,
      fields: {
        title: { type: "text" },
        text: { type: "text" },
        buttonLabel: { type: "text" },
        variant: {
          type: "radio",
          options: [
            { value: "default", label: "Default" },
            { value: "dragndrop", label: "dragndrop" }
          ]
        }
      },
      defaultProps: {
        title: "Upload drivers license",
        text: "Formats accepted: JPG, PNG or PDF File size must not exceed 350MB",
        buttonLabel: "Select file",
        variant: "default"
      }
    },

    FooterNDIS: {
      render: (props) => <FooterNDIS {...props} />,
      fields: {
        footerTitle: { type: "text" },
        footerText: { type: "text" },
        footerLinks: {
          type: 'array',
          arrayFields: {
            label: { type: 'text' },
            link: { type: 'text' }
          }
        }
      },
      defaultProps: {
        footerTitle: "We pay respect to the Traditional Custodians and First Peoples of NSW, and acknowledge their continued connection to their country and culture.",
        footerText: "Copyright © 2019",
        footerLinks: [{ label: 'Google', link: 'https://www.google.com' }, { label: 'Facebook', link: 'https://www.facebook.com' }]
      }
    },

    HeaderNDIS: {
      render: (props) => <HeaderNDIS {...props} />,
      fields: {
        headerText: { type: "text" },
        headerPhone: { type: "text" },
        headerDropdowns: {
          type: 'array',
          max: 5,
          arrayFields: {
            label: { type: "text" },
            links: {
              type: "array",
              arrayFields: {
                label: { type: 'text' },
                link: { type: 'text' }
              }
            }
          }
        },
        headerAboveDropdown: {
          type: "object",
          objectFields: {
            label: { type: "text" },
            labelLink: { type: "text" },
            link: { type: "text" }
          },
        },
        button: {
          type: "object",
          objectFields: {
            title: { type: "text" },
            link: { type: "text" }
          },
        }
      },
      defaultProps: {
        headerText: "Trusted by the public to collect information for the australian government.",
        headerPhone: "1800 035 544",
        headerAboveDropdown: { label: 'Portals', labelLink: 'Facebook', link: 'https://www.google.com' },
        headerDropdowns: [
          { label: 'For participants', links: [{ label: 'Facebook Link', link: 'https://www.facebook.com' }] },
          { label: 'For providers', links: [{ label: 'Facebook Link', link: 'https://www.facebook.com' }] },
          { label: 'For workers', links: [{ label: 'Facebook Link', link: 'https://www.facebook.com' }] },
          { label: 'Resources', links: [{ label: 'Facebook Link', link: 'https://www.facebook.com' }] },
          { label: 'About', links: [{ label: 'Facebook Link', link: 'https://www.facebook.com' }] },
          { label: 'Contact us', links: [{ label: 'Facebook Link', link: 'https://www.facebook.com' }] }
        ],
        button: { title: 'Talk to us', link: 'https://www.facebook.com' }
      }
    },

    dropdownNDIS: {
      render: (props) => <DropdownNDIS {...props} />,
      fields: {
        label: { type: "text" },
        links: {
          type: 'array',
          arrayFields: {
            label: { type: 'text' },
            link: { type: 'text' }
          }
        }
      },
      defaultProps: {
        label: "Main nav",
        links: [{ label: 'Google', link: 'https://www.google.com' }, { label: 'Facebook', link: 'https://www.facebook.com' }]
      }
    },

    MastHead: {
      render: () => <MastHead />,
    },
    Separator: {
      fields: {
        text: { type: "text" },
        className: { type: "text" },
      },
      defaultProps: {
        text: "Separator",
      },
      render: (props: SeparatorProps) => <Separator {...props} />,
    },
    Input: {
      fields: {
        placeholder: { type: "text" },
      },
      defaultProps: {
        placeholder: "Write something",
      },
      render: (props: InputProps) => <Input {...props} />,
    },
    Select: {
      fields: {
        options: {
          type: "array",
          getItemSummary: (item) => item.label || "Option",
          arrayFields: {
            label: { type: "text" },
            value: { type: "text" },
          },
          defaultItemProps: {
            label: "Option",
            value: "option",
          },
        },
      },
      defaultProps: {
        options: [
          { label: "Option 1", value: "option-1" },
          { label: "Option 2", value: "option-2" },
        ],
      },
      render: (props) => (
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {props.options.map((item) => (
              <SelectItem value={item.value ? item.value : "empty"}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ),
    },
    RadioGroup: {
      fields: {
        options: {
          type: "array",
          getItemSummary: (item) => item.label || "Option",
          arrayFields: {
            label: { type: "text" },
            value: { type: "text" },
          },
          defaultItemProps: {
            label: "Option",
            value: "option",
          },
        },
      },
      defaultProps: {
        options: [
          { label: "Option 1", value: "option-1" },
          { label: "Option 2", value: "option-2" },
        ],
      },
      render: (props) => (
        <RadioGroup defaultValue="option-one">
          {props.options.map((item) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={item.value} id={item.value} />
              <span>{item.value ? item.value : " "}</span>
            </div>
          ))}
        </RadioGroup>
      ),
    },
    SwitchButton: {
      fields: {
        options: {
          type: "array",
          getItemSummary: (item) => item.label || "Option",
          arrayFields: {
            label: { type: "text" },
            value: { type: "text" },
          },
          defaultItemProps: {
            label: "Option",
            value: "option",
          },
        },
      },
      defaultProps: {
        options: [
          "Yes",
          "No",
        ],
      },
      render: (props: SwitchButtonProps) => <SwitchButton {...props} />,
    },
    Button: {
      fields: {
        variant: {
          type: "radio",
          options: [
            { value: "default", label: "Default" },
            { value: "dark", label: "Dark" },
            { value: "dark-outline", label: "Dark Outline" },
            { value: "light", label: "Light" },
            { value: "light-outline", label: "Light Outline" },
            { value: "white", label: "White" },
            { value: "green", label: "Green" },
            { value: "green-outline", label: "Green Outline" },
            { value: "transparent", label: "Transparent" },
          ],
        },
        label: { type: "text" },
      },
      defaultProps: {
        variant: "default",
        label: "Button",
      },

      render: (props: ButtonProps) => <Button {...props} />,
    },
    Label: {
      fields: {
        text: { type: "text" },
      },
      defaultProps: {
        text: "Label",
      },
      render: (props) => <Label {...props} />,
    },
  },
};

export default conf;
