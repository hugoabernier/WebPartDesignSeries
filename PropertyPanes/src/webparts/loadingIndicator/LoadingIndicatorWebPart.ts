import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  IPropertyPaneDropdownOption
} from '@microsoft/sp-property-pane';

import * as strings from 'LoadingIndicatorWebPartStrings';
import LoadingIndicator from './components/LoadingIndicator';
import { ILoadingIndicatorProps } from './components/ILoadingIndicatorProps';

// ADDED: For sample data
// Sample data from https://mockaroo.com
const plantChoices: IPropertyPaneDropdownOption[] = [
  {
    "text": "Dendrophylax lindenii (Lindl.) Benth. ex Rolfe",
    "key": "8968f98e-4da9-44c2-8015-82ebfdc4f755"
  }, {
    "text": "Cardamine californica (Nutt.) Greene",
    "key": "8718510d-e824-4406-b980-d48785c8a3b4"
  }, {
    "text": "Alophia drummondii (Graham) R.C. Foster",
    "key": "e0816bbf-00e7-4298-9afe-fd4c0347e194"
  }, {
    "text": "Cryptomeria D. Don",
    "key": "cb660b52-81cd-4359-b63c-32856a14c898"
  }, {
    "text": "Callitriche palustris L.",
    "key": "0682317d-f59d-4823-80bb-8c5eab3a27dd"
  }, {
    "text": "Pleuraphis Torr.",
    "key": "0c5434fd-c3f4-42a4-9865-655200f3330d"
  }, {
    "text": "Rosa centifolia L.",
    "key": "7de9c00a-11e2-4dce-b2a2-09d873ba76df"
  }, {
    "text": "Heterodermia obscurata (Nyl.) Trevis.",
    "key": "cf586c44-be5d-485d-bf79-0c31985aa114"
  }, {
    "text": "Miconia impetiolaris (Sw.) D. Don ex DC.",
    "key": "81896129-856d-4a6f-8449-9c30b4f3ef17"
  }, {
    "text": "Phacelia purshii Buckley",
    "key": "d3213233-abb2-4a9c-bcc5-732b9ba9cfad"
  }, {
    "text": "Leymus salinus (M.E. Jones) Á. Löve ssp. salinus",
    "key": "3c970bef-2e6b-4f9b-bcd6-beacc22ef8e4"
  }, {
    "text": "Caloplaca flavorubescens (Huds.) J.R. Laundon",
    "key": "182a92d1-19d4-4936-9bc5-de6ab58b7cf1"
  }, {
    "text": "Anthoxanthum odoratum L.",
    "key": "baa05e80-e08f-46f2-ab93-4e299a15f5ea"
  }, {
    "text": "Galactia smallii H.J. Rogers ex Herndon",
    "key": "ce9330e5-a18d-4715-bf82-198b01215673"
  }, {
    "text": "Mimulus viscidus Congd. ssp. viscidus",
    "key": "cdcfb63f-0f93-4adb-9ab2-ca0c934ef81f"
  }, {
    "text": "Alvaradoa amorphoides Liebm.",
    "key": "ab76fed2-96d0-42a3-9f77-8b9e1492b611"
  }, {
    "text": "Warnstorfia Loeske",
    "key": "429773a3-c995-4984-b20a-94ae149b6ab5"
  }, {
    "text": "Verrucaria aquilella Nyl.",
    "key": "8c72d57a-e354-4bf4-8833-a724b6e88057"
  }, {
    "text": "Psorothamnus emoryi (A. Gray) Rydb.",
    "key": "30c77b20-79b5-4386-b6d9-11fa6906d259"
  }, {
    "text": "Justicia wrightii A. Gray",
    "key": "30e0dfee-15cb-496f-9d10-a2d4d2016562"
  }, {
    "text": "Claytonia lanceolata Pall. ex Pursh var. idahoensis R.J. Davis",
    "key": "dbde7aa1-2a32-4d05-87e4-0c8ca26ded64"
  }, {
    "text": "Remya kauaiensis Hillebr.",
    "key": "0510b6f0-3547-4fdc-889f-bce3f765b135"
  }, {
    "text": "Trifolium calcaricum J.L. Collins & T.F. Wieboldt",
    "key": "762ed809-9de4-439e-8470-609158b8dbe6"
  }, {
    "text": "Veratrum insolitum Jeps.",
    "key": "2118e716-8cb7-47e6-b8c0-113a222d68c7"
  }, {
    "text": "Vulpia microstachys (Nutt.) Munro var. microstachys",
    "key": "75456dd8-6f2e-4328-a869-5c41e0da1a5c"
  }, {
    "text": "Margaranthus Schltdl.",
    "key": "92783b95-afd3-4637-9285-26bb13bc9d5c"
  }, {
    "text": "Triumfetta rhomboidea Jacq.",
    "key": "3a623a19-7f59-40a0-8ded-3c7b132d9954"
  }, {
    "text": "Linum trigynum L.",
    "key": "b4dc93dc-b97a-4a4a-8b25-6a6d38813946"
  }, {
    "text": "Leptogium floridanum Sierk",
    "key": "ff9b0922-1b95-452d-a004-918131cd1f32"
  }, {
    "text": "Delissea lauliiana Lammers",
    "key": "32b4b0f7-a49f-4cc7-a213-1ced0ffaa583"
  }, {
    "text": "Cryptantha rollinsii I.M. Johnst.",
    "key": "65257b35-213a-4a96-91f8-0d78a1adca3d"
  }, {
    "text": "Tripolium Nees",
    "key": "f2272f8d-249c-42d1-bea0-c720a229837a"
  }, {
    "text": "Phlomis L.",
    "key": "9ed6c2b4-f210-4050-8b44-ec25fee441e6"
  }, {
    "text": "Corallorhiza bentleyi Freudenstein",
    "key": "ee1e7e73-7147-4c64-a83d-6614eb30c0b0"
  }, {
    "text": "Ardisia crenata Sims",
    "key": "88af901d-06d7-4720-83ca-d5086d697502"
  }, {
    "text": "Archidium tenerrimum Mitt.",
    "key": "edb2aee4-a87d-4068-b744-dbd1ba7d7ea1"
  }, {
    "text": "Arceuthobium abietinum Engelm. ex Munz ssp. abietinum",
    "key": "d03e336c-50ac-4399-bc2e-3c6f5d9dcf63"
  }, {
    "text": "Silene sorensenis (B. Boivin) Bocquet",
    "key": "97c105c6-29e2-48e7-91a9-49d629cb8b59"
  }, {
    "text": "Guilleminea densa (Humb. & Bonpl. ex Schult.) Moq.",
    "key": "c00f0227-4d81-4273-9d79-b9b052a0f0e8"
  }, {
    "text": "Carex careyana Torr. ex Dewey",
    "key": "390f19f4-507f-491e-933d-bda990afe4a2"
  }, {
    "text": "Hymenopappus filifolius Hook. var. nudipes (Maguire) B.L. Turner",
    "key": "bda39a24-7cc5-451e-9e38-dffe85f4f72b"
  }, {
    "text": "Calophyllum inophyllum L.",
    "key": "b95b1e2a-8bd8-492b-9c38-1584bc6a85aa"
  }, {
    "text": "Peltigera praetextata (Flörke ex Sommerf.) Zopf",
    "key": "71c88208-2aae-448a-b28f-2afab1890d74"
  }, {
    "text": "Echeandia texensis Cruden",
    "key": "102b97b4-f1b6-4a8f-8f9e-741eb4a8a006"
  }, {
    "text": "Ligularia Cass.",
    "key": "713d6dff-eb0b-46c5-a2f6-0cd0747de08d"
  }, {
    "text": "Carex manhartii Bryson",
    "key": "c603b28b-7669-4c1b-8f3b-4d87f344a493"
  }, {
    "text": "Fadyenia hookeri (Sweet) Maxon",
    "key": "bfd9ea9f-b6e1-4725-9f89-fba18815d9cc"
  }, {
    "text": "Pedicularis canadensis L.",
    "key": "e78676d6-e731-4f4f-8f49-b2bf84c21f17"
  }, {
    "text": "Platyhypnidium riparioides (Hedw.) Dix.",
    "key": "4f7bed4c-0534-45f7-bc1f-e76b729d0058"
  }, {
    "text": "Lepidium montanum Nutt. var. wyomingense (C.L. Hitchc.) C.L. Hitchc.",
    "key": "74ae0e49-37f6-4b14-b01a-3e9f13ce655d"
  }];
// END: Added

export interface ILoadingIndicatorWebPartProps {
  plantKey: string;
  plantDescription: string;
}

export default class LoadingIndicatorWebPart extends BaseClientSideWebPart<ILoadingIndicatorWebPartProps> {

  // ADDED: To store whether we should display the loading indicator or not
  private showLoadingIndicator: boolean = true;
  // END: added
  private loadedPlantList: IPropertyPaneDropdownOption[];

  public render(): void {
    const element: React.ReactElement<ILoadingIndicatorProps> = React.createElement(
      LoadingIndicator,
      {
        description: this.properties.plantDescription
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      // ADDED: To display a loading indicator
      showLoadingIndicator: this.showLoadingIndicator,
      loadingIndicatorDelayTime: 10000,
      // END: Added
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneDropdown('description', {
                  label: strings.DescriptionFieldLabel,
                  options: this.loadedPlantList
                })
              ]
            }
          ]
        }
      ]
    };
  }

  // ADDED: To display the loading indicator when preparing the property pane
  protected async onPropertyPaneConfigurationStart(): Promise<void> {
    // Call your service
    // Remember that this method gets called *every time* before a user
    // displays the property pane. You should probably verify that your
    // data isn't already loaded before calling your async method again
    this.loadedPlantList = await this.getPlantNames();

    // When done loading, set the loading indicator to false and refresh
    this.showLoadingIndicator = false;
    this.context.propertyPane.refresh();
  }

  // //If you prefer, you could write your method like this
  // protected onPropertyPaneConfigurationStart(): void {
  //   // Call your service
  //   // Remember that this method gets called *every time* before a user
  //   // displays the property pane. You should probably verify that your
  //   // data isn't already loaded before calling your async method again
  //   this.getPlantNames().then((plantList:IPropertyPaneDropdownOption[])=>{

  //     this.loadedPlantList = plantList;

  //     // When done loading, set the loading indicator to false and refresh
  //     this.showLoadingIndicator = false;
  //     this.context.propertyPane.refresh();
  //   });
  // }

  // END: Added

  // When user selects plant, find the plant name by key and save as property
  protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any) {
    console.log("Property Path", propertyPath, newValue);
    if (this.loadedPlantList && newValue) {
      // Get the plants matching the key.
      const selectedPlantsChoices:IPropertyPaneDropdownOption[]  = this.loadedPlantList.filter(k => k.key === newValue);

      // Make sure that there is at least one plant matching the key
      if (selectedPlantsChoices.length > 0) {
        // Get only the first one
        // It should never return more than one, but just in case
        this.properties.plantDescription = selectedPlantsChoices[0].text;
      }
    }
  }

  // ADDED: fake asynchronous call to demonstrate using a loading indicator
  private getPlantNames(): Promise<IPropertyPaneDropdownOption[]> {
    return new Promise<IPropertyPaneDropdownOption[]>((resolve) => {
      // pretend we're getting the data from a service
      setTimeout(() => {
        resolve(plantChoices);
      }, 5000);
    });
  }
  // END: Added
}
