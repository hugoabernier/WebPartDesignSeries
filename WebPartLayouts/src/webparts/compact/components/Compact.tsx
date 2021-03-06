import * as React from 'react';
import styles from './Compact.module.scss';
import { ICompactProps, ICompactState } from './Compact.types';
import * as strings from 'CompactWebPartStrings';

// Used to render document cards
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardDetails,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import CompactLayout from '../../../components/compactLayout/CompactLayout';
import { Paging } from '../../../components/paging';

export default class Compact extends React.Component<ICompactProps, ICompactState> {
  /**
   *
   */
  constructor(props: ICompactProps) {
    super(props);

    // Sample data generated at https://mockaroo.com/
    this.state = {
      currentPage: 1,
      items: [{
        thumbnail: "https://robohash.org/nostrumquiiure.png?size=48x48&set=set1",
        title: "Aerified"
      }, {
        thumbnail: "https://robohash.org/minimafugitenim.png?size=48x48&set=set1",
        title: "Viva"
      }, {
        thumbnail: "https://robohash.org/nihilbeataeculpa.png?size=48x48&set=set1",
        title: "Overhold"
      }, {
        thumbnail: "https://robohash.org/essequiquo.png?size=48x48&set=set1",
        title: "Latlux"
      }, {
        thumbnail: "https://robohash.org/inipsumtotam.png?size=48x48&set=set1",
        title: "Biodex"
      }, {
        thumbnail: "https://robohash.org/utmodiet.png?size=48x48&set=set1",
        title: "Bitchip"
      }, {
        thumbnail: "https://robohash.org/undeenimvel.png?size=48x48&set=set1",
        title: "Rank"
      }, {
        thumbnail: "https://robohash.org/pariaturoditdolore.png?size=48x48&set=set1",
        title: "Opela"
      }, {
        thumbnail: "https://robohash.org/nullaullamincidunt.png?size=48x48&set=set1",
        title: "Rank"
      }, {
        thumbnail: "https://robohash.org/accusantiumnonvoluptatibus.png?size=48x48&set=set1",
        title: "Bitchip"
      }, {
        thumbnail: "https://robohash.org/culpaeossapiente.png?size=48x48&set=set1",
        title: "Sonsing"
      }, {
        thumbnail: "https://robohash.org/harumnihilvelit.png?size=48x48&set=set1",
        title: "Duobam"
      }, {
        thumbnail: "https://robohash.org/quianesciuntet.png?size=48x48&set=set1",
        title: "Prodder"
      }, {
        thumbnail: "https://robohash.org/aliquidipsamrem.png?size=48x48&set=set1",
        title: "Keylex"
      }, {
        thumbnail: "https://robohash.org/dignissimoseosaccusamus.png?size=48x48&set=set1",
        title: "Span"
      }, {
        thumbnail: "https://robohash.org/exomnisexcepturi.png?size=48x48&set=set1",
        title: "Stringtough"
      }, {
        thumbnail: "https://robohash.org/occaecatimolestiaererum.png?size=48x48&set=set1",
        title: "Prodder"
      }, {
        thumbnail: "https://robohash.org/consequaturinquis.png?size=48x48&set=set1",
        title: "Alpha"
      }, {
        thumbnail: "https://robohash.org/sapienteofficiisest.png?size=48x48&set=set1",
        title: "Job"
      }, {
        thumbnail: "https://robohash.org/similiquesuntiusto.png?size=48x48&set=set1",
        title: "Cookley"
      }, {
        thumbnail: "https://robohash.org/sitnequequi.png?size=48x48&set=set1",
        title: "Stronghold"
      }]
    };
  }

  public render(): React.ReactElement<ICompactProps> {
    let pagedItems: any[] = this.state.items;
    const totalItems: number = pagedItems.length;
    let showPages: boolean = false;
    const maxEvents: number = 5;
    const { currentPage } = this.state;

    if (this.props.usePaging === true && totalItems > 0 && totalItems > maxEvents) {
      // calculate the page size
      const pageStartAt: number = maxEvents * (currentPage - 1);
      const pageEndAt: number = (maxEvents * currentPage);

      pagedItems = pagedItems.slice(pageStartAt, pageEndAt);
      showPages = true;
    }

    return (
      <div className={styles.compact}>
        <CompactLayout
          items={pagedItems}
          onRenderGridItem={(item: any, index: number) => this._onRenderGridItem(item, index)} />

        {showPages &&
          <Paging
            showPageNumber={true}
            currentPage={currentPage}
            itemsCountPerPage={maxEvents}
            totalItems={totalItems}
            onPageUpdate={this._onPageUpdate}
            nextButtonLabel={strings.NextLabel}
            previousButtonLabel={strings.PreviousLabel}
          />
        }
      </div>
    );
  }

  private _onPageUpdate = (pageNumber: number): void => {
    this.setState({
      currentPage: pageNumber
    });
  }

  private _onRenderGridItem = (item: any, _index: number): JSX.Element => {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewImageSrc: item.thumbnail,
          imageFit: ImageFit.centerCover,
          height: 48,
          width: 48
        }
      ]
    };

    return <div
      data-is-focusable={true}
      data-is-focus-item={true}
      role="listitem"
      aria-label={item.title}
    >
      <DocumentCard
        type={DocumentCardType.compact}
        onClick={(ev: React.SyntheticEvent<HTMLElement>) => alert(ev)}
      >
        <DocumentCardPreview {...previewProps} />
        <DocumentCardDetails>
          <DocumentCardTitle
            title={item.title}
            shouldTruncate={true}
          />
        </DocumentCardDetails>
      </DocumentCard>
    </div>;
  }
}
