class NyanCat extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = this.render();
    }

    render() {
        return `<style>${CSS()}</style>
      <div id="n-lder" class="loading">
        <div id="cat">
          <div id="hide-behind" class="background-color"></div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="21" preserveAspectRatio="xMinYMin meet" viewBox="0 0 33 21">
            <g id="nyan_all">
              <g id="nyan_feet">
                <g>
                  <path d="m 4,20 0,-3 1,0 0,-1 4,0 0,3 -1,0 0,1 z" style="fill:#000000;"></path>
                  <path d="m 5,19 0,-2 3,0 0,1 -1,0 0,1 z" style="fill:#999999;"></path>
                  <path d="m 10,20 0,-2 4,0 0,1 -1,0 0,1 z" style="fill:#000000;"></path>
                  <path d="m 11,18 2,0 0,1 -2,0 z" style="fill:#999999;"></path>
                </g>
                <g transform="matrix(-1,0,0,1,32,0)">
                  <path d="m 10,20 0,-2 4,0 0,1 -1,0 0,1 z" style="fill:#000000;"></path>
                  <path d="m 11,18 2,0 0,1 -2,0 z" style="fill:#999999;"></path>
                  <path d="m 4,20 0,-3 1,0 0,-1 4,0 0,3 -1,0 0,1 z" style="fill:#000000;"></path>
                  <path d="m 5,19 0,-2 3,0 0,1 -1,0 0,1 z" style="fill:#999999;"></path>
                </g>
              </g>
              <g id="nyan_tail">
                <path d="M 0,10 0,7 4,7 4,8 5,8 5,9 6,9 6,14 5,14 5,13 3,13 3,12 2,12 2,11 1,11 1,10 z" style="fill:#000000;" />
                <path d="m 1,9 0,-1 2,0 0,1 1,0 0,1 1,0 0,1 1,0 0,1 -2,0 0,-1 -1,0 0,-1 -1,0 0,-1 z" style="fill:#999999;" />
              </g>
              <g id="nyan_body">
                <path d="m 7,1 19,0 0,16 -19,0 z" style="fill:#ffcc99;" />
                <path d="m 8,14 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z" style="fill:#ff99ff;" />
                <path d="m 22,5 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z" style="fill:#ff3399;" />
                <path d="m 8,17 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z" style="fill:#000000;" />
              </g>
              <g id="nyan_head">
                <path d="m 17,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z" style="fill:#999999;fill-opacity:1;stroke:none" />
                <path d="m 29,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z" style="fill:#000000;fill-opacity:1;stroke:none" />
                <path d="m 18,13 2,0 0,2 -2,0 z" style="fill:#ff9999;fill-opacity:1;stroke:none" />
                <path d="m 29,13 2,0 0,2 -2,0 z" style="fill:#ff9999;fill-opacity:1;stroke:none" />
                <path d="m 21,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z" style="fill:#000000;fill-opacity:1;stroke:none" />
                <path d="m 25,12 1,0 0,1 -1,0 z" style="fill:#000000;fill-opacity:1;stroke:none" />
                <g>
                  <path d="m 27,13 0,-1 1,0 0,-1 1,0 0,2 z" style="fill:#000000;fill-opacity:1;stroke:none" />
                  <path d="m 27,11 1,0 0,1 -1,0 z" style="fill:#ffffff;fill-opacity:1;stroke:none" />
                  <path d="m 20,13 0,-1 1,0 0,-1 1,0 0,2 z" style="fill:#000000;fill-opacity:1;stroke:none" />
                  <path d="m 20,11 1,0 0,1 -1,0 z" style="fill:#ffffff;fill-opacity:1;stroke:none" />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div id="rbw">
          <div class="w">
            <div class="rbw f1">
              <div class="wv wv-1"></div><div class="wv wv-2"></div><div class="wv wv-3"></div>
              <div class="wv wv-4"></div><div class="wv wv-5"></div><div class="wv wv-6"></div>
            </div>
            <div class="rbw f2">
              <div class="wv wv-1"></div><div class="wv wv-2"></div><div class="wv wv-3"></div>
              <div class="wv wv-4"></div><div class="wv wv-5"></div><div class="wv wv-6"></div>
            </div>
            <div class="rbw f3">
              <div class="wv wv-1"></div><div class="wv wv-2"></div><div class="wv wv-3"></div>
              <div class="wv wv-4"></div><div class="wv wv-5"></div><div class="wv wv-6"></div>
            </div>
            <div class="rbw f4">
              <div class="wv wv-1"></div><div class="wv wv-2"></div><div class="wv wv-3"></div>
              <div class="wv wv-4"></div><div class="wv wv-5"></div><div class="wv wv-6"></div>
            </div>
            <div class="rbw f5">
              <div class="wv wv-1"></div><div class="wv wv-2"></div><div class="wv wv-3"></div>
              <div class="wv wv-4"></div><div class="wv wv-5"></div><div class="wv wv-6"></div>
            </div>
            <div class="rbw f6">
              <div class="wv wv-1"></div><div class="wv wv-2"></div><div class="wv wv-3"></div>
              <div class="wv wv-4"></div><div class="wv wv-5"></div><div class="wv wv-6"></div>
            </div>
          </div>
        </div>
      </div>
`;
    }
}

customElements.define("data-nyancat", NyanCat);

function CSS() {
    return `
        #n-lder{ max-width: 100%; overflow: hidden; }
        #n-lder #cat{ position: absolute; top: calc(50% + 45px); left: 0%; margin-left: -250px; margin-top: -125px; width: 100%; height: 150px; }
        #n-lder.loading #cat{ left: 20%; left: calc(50% + 125px); transition: left 4s ease-out; }
        #n-lder.loading.done #cat { left: 100%; left: calc(100% + 250px); transition: left 0.5s linear; }
        #n-lder #cat svg{ height: 160px; width: 250px; position: absolute; }
        #n-lder #cat #hide-behind{ position: absolute; top: 0; left: 55px; bottom: 0; right: -250px; }

        #n-lder #rbw{ position: absolute; top: calc(50% + 45px); left: 0; overflow: hidden; height: 145px; margin-top: -110px; width: 100%; }
        #n-lder #rbw .w{ width: 10000px; }
        #n-lder #rbw .rbw { z-index: -1; font-size: 16em; float: left; position: relative; }
        #n-lder #rbw .rbw .wv { height: 20px; width: 55px; }
        #n-lder #rbw .rbw .wv.wv-1 { background: #ff0000; }
        #n-lder #rbw .rbw .wv.wv-2 { background: #ff9900; }
        #n-lder #rbw .rbw .wv.wv-3 { background: #ffff00; }
        #n-lder #rbw .rbw .wv.wv-4 { background: #33ff00; }
        #n-lder #rbw .rbw .wv.wv-5 { background: #0099ff; }
        #n-lder #rbw .rbw .wv.wv-6 { background: #6633ff; }

        #n-lder #rbw .rbw{ top: 0px; animation: rbw .6s linear infinite; }
        #n-lder #rbw .rbw.f1{ animation-delay: 0s; }
        #n-lder #rbw .rbw.f2{ animation-delay: 0.1s; }
        #n-lder #rbw .rbw.f3{ animation-delay: 0.2s; }
        #n-lder #rbw .rbw.f4{ animation-delay: 0.3s; }
        #n-lder #rbw .rbw.f5{ animation-delay: 0.4s; }
        #n-lder #rbw .rbw.f6{ animation-delay: 0.5s; }
        @keyframes rbw {
            0%{ top: 0px; }
            50%{ top: 15px; }
            100%{ top: 0px; }
        }
        @keyframes nyan_all {
            0%{ transform: translateY(0px); }
            33%{ transform: translateY(0px); }
            34%{ transform: translateY(1px); }
            100%{ transform: translateY(1px); }
        } #n-lder svg g#nyan_all{ animation: nyan_all 0.40s linear infinite; }
        @keyframes nyan_head {
            0%{ transform: translateX(0px) translateY(0px); }
            16%{ transform: translateX(0px) translateY(0px); }
            17%{ transform: translateX(1px) translateY(0px); }
            66%{ transform: translateX(1px) translateY(0px); }
            67%{ transform: translateX(0px) translateY(0px); }
            83%{ transform: translateX(0px) translateY(0px); }
            84%{ transform: translateX(0px) translateY(-1px); }
            100%{ transform: translateX(0px) translateY(-1px); }
        } #n-lder svg g#nyan_head{ animation: nyan_head 0.4s linear infinite; }
        @keyframes nyan_walk {
            0%{ transform: translateX(0px); }
            16%{ transform: translateX(0px); }
            17%{ transform: translateX(1px); }
            33%{ transform: translateX(1px); }
            34%{ transform: translateX(2px); }
            50%{ transform: translateX(2px); }
            51%{ transform: translateX(1px); }
            100%{ transform: translateX(0px); }
        } #n-lder svg g#nyan_feet{ animation: nyan_walk 0.5s linear infinite; }
        @keyframes nyan_tail {
            0%{ transform: rotate(0); }
            16%{ transform: rotate(0); }
            17%{ transform: rotate(-5deg); }
            33%{ transform: rotate(-5deg); }
            34%{ transform: rotate(-10deg); }
            49%{ transform: rotate(-10deg); }
            50%{ transform: rotate(-20deg); }
            66%{ transform: rotate(-20deg); }
            67%{ transform: rotate(-10deg); }
            83%{ transform: rotate(-10deg); }
            84%{ transform: rotate(-5deg); }
            99%{ transform: rotate(-5deg); }
            100%{ transform: rotate(0deg); }
        } #n-lder svg g#nyan_tail{ animation: nyan_tail 0.5s linear infinite; transform-origin: 4px 8px; }
`;
};
