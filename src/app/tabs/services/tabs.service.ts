import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { concatMap, Observable, of, Subject, timer } from 'rxjs';

import { SampleListItem, SampleWiki } from '../../interfaces/sample-data.interface';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  tabChange$: Observable<string>;
  private tabChange = new Subject<string>();

  constructor(private httpClient: HttpClient) {
    this.tabChange$ = this.tabChange.asObservable();
  }

  updateTab(tab: string): void {
    this.tabChange.next(tab);
  }

  getSampleList(offset: number): Observable<SampleListItem[]> {
    return offset >= 100000
      ? of([])
      : timer(1000).pipe(
          concatMap(() =>
            of(
              [...Array(100)].map((_, index) => ({
                id: index + offset + 1,
                imageId: (index + offset + 1) % 70,
                name: Math.random().toString(32).substring(2),
                score: (index + offset + 1) * 10,
              }))
            )
          )
        );
  }

  getSampleImage(imageId: number): Observable<Blob> {
    const url = `https://i.pravatar.cc/150?img=${imageId}`;
    return this.httpClient.get(url, {
      responseType: 'blob',
    });
  }

  getSampleWiki(): Observable<SampleWiki[]> {
    return timer(2000).pipe(
      concatMap(() =>
        of([
          {
            text:
              '人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、\n' +
              '人権の無視及び軽侮が、人類の良心を踏みにじった野蛮行為をもたらし、言論及び信仰の自由が受けられ、恐怖及び欠乏のない世界の到来が、一般の人々の最高の願望として宣言されたので、\n' +
              '人間が専制と圧迫とに対する最後の手段として反逆に訴えることがないようにするためには、法の支配によって人権を保護することが肝要であるので、\n' +
              '諸国間の友好関係の発展を促進することが肝要であるので、国際連合の諸国民は、国連憲章において、基本的人権、人間の尊厳及び価値並びに男女の同権についての信念を再確認し、かつ、一層大きな自由のうちで社会的進歩と生活水準の向上とを促進することを決意したので、\n' +
              '加盟国は、国際連合と協力して、人権及び基本的自由の普遍的な尊重及び遵守の促進を達成することを誓約したので、\n' +
              'これらの権利及び自由に対する共通の理解は、この誓約を完全にするためにもっとも重要であるので、\n' +
              'よって、ここに、国連総会は、\n' +
              '社会の各個人及び各機関が、この世界人権宣言を常に念頭に置きながら、加盟国自身の人民の間にも、また、加盟国の管轄下にある地域の人民の間にも、これらの権利と自由との尊重を指導及び教育によって促進すること並びにそれらの普遍的措置によって確保することに努力するように、すべての人民とすべての国とが達成すべき共通の基準として、この人権宣言を公布する。',
            title: 'Sample1',
          },
          {
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis pretium urna. Aliquam nec bibendum odio.\n' +
              'Aenean nec elementum magna. Sed dolor leo, efficitur quis pretium quis, efficitur gravida est. Vivamus finibus, dui\n' +
              'ut rutrum mattis, ligula turpis ornare magna, id condimentum urna mi at nisi. Aliquam ornare sodales viverra. Donec\n' +
              'semper lacus ac turpis luctus mollis. Donec quis sem vel lacus ullamcorper cursus. Donec auctor auctor enim eu\n' +
              'condimentum.',
            title: 'Sample2',
          },
          {
            text:
              'Suspendisse erat leo, dapibus eu vehicula vitae, porttitor sit amet odio. Phasellus et dui sed metus ullamcorper\n' +
              'feugiat in a libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n' +
              'Maecenas in lectus sit amet mi placerat rhoncus. Maecenas a dui in nulla sodales viverra sed at diam. Curabitur\n' +
              'aliquam, neque id accumsan efficitur, est enim consequat nisl, a rutrum felis magna porta nisl. Phasellus suscipit\n' +
              'feugiat turpis, nec interdum mi ultrices a. Curabitur cursus ligula sapien, non dictum libero dictum molestie.\n' +
              'Praesent at metus mauris. Sed vitae tellus et nunc vehicula maximus ut quis erat.',
            title: 'Sample3',
          },
          {
            text:
              'Nunc vulputate venenatis ex, in suscipit metus aliquet ac. Nunc maximus laoreet metus, blandit accumsan quam feugiat\n' +
              'ac. In finibus efficitur feugiat. Aliquam erat volutpat. Integer fermentum non arcu eget gravida. Ut congue magna\n' +
              'sit amet purus aliquet accumsan. Pellentesque a dui ac enim vulputate sodales. Ut pulvinar sapien vel mauris\n' +
              'convallis, eu pellentesque justo semper. Suspendisse non odio vitae ex efficitur placerat ut vel mauris. Suspendisse\n' +
              'ante massa, malesuada nec laoreet nec, aliquam id nunc. Phasellus fermentum consequat eros eget sollicitudin. Sed\n' +
              'hendrerit laoreet nibh in fringilla. Vestibulum porta ultricies enim vel ornare. Integer luctus faucibus nunc, non\n' +
              'mattis nisl consectetur at. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            title: 'Sample4',
          },
          {
            text:
              'Suspendisse et arcu nec odio lobortis lacinia a congue ligula. Duis libero lacus, blandit ac lectus et, laoreet\n' +
              'condimentum est. Suspendisse potenti. Praesent ligula dui, laoreet sed pellentesque vitae, congue at leo. Mauris\n' +
              'pharetra, tellus vel viverra viverra, tellus felis mollis magna, volutpat pharetra augue nunc a dolor. Donec ex\n' +
              'turpis, iaculis id consectetur quis, posuere a purus. Morbi eu massa sed erat tristique hendrerit. Morbi eleifend,\n' +
              'nisi eleifend condimentum euismod, lacus erat porta arcu, consequat rutrum ipsum arcu at metus. Sed tellus nulla,\n' +
              'pellentesque sit amet justo at, venenatis imperdiet dui. Aenean odio eros, posuere at dui pharetra, laoreet posuere\n' +
              'nulla. Vestibulum interdum odio eu odio ornare, quis maximus lacus semper. Quisque purus dolor, ullamcorper mollis\n' +
              'lorem at, sodales aliquet velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus purus felis,\n' +
              'elementum ut est ut, finibus sagittis tellus. Etiam neque mauris, lobortis sed orci in, dictum eleifend turpis.\n' +
              'Morbi eu odio quis mauris gravida tristique.',
            title: 'Sample5',
          },
          {
            text:
              'Vestibulum blandit quam a odio lobortis dictum. Nulla pellentesque mauris ornare neque ultricies sagittis. Aenean\n' +
              'molestie placerat fermentum. Morbi ac tortor vel felis imperdiet suscipit. Ut id pellentesque nulla. Pellentesque\n' +
              'habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc tincidunt tincidunt malesuada.\n' +
              'Mauris sit amet magna nibh.',
            title: 'Sample6',
          },
        ])
      )
    );
  }
}
