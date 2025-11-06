async function checkCode(input, correctHash) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex === correctHash;
}

async function hash(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

const hashes = [
    ["c28d112ba2c7dae7a90475008ac066baa8c3adf14dab50e28f6bffd97088c8c8","valid"],
    ["0abe901d38f79879a79cc747383d75be6b8e512b6340fd30e907637d83cdb037","valid"],
    ["e4fb6c9a8311fa83ddce8e65e9317b7f12c3393185067dfa476a27d8e79c7bbd","valid"],
    ["a78c44f50a8743f411db2d566222d8c1290c3253915d9a0ffa07f999edd6a903","valid"],
    ["83553068ecdfde81d5566c82db5e6bb4f716c461af00634a550acf939cfd3335","give me a litttle more?"]

    ["fb6b00e8e1da5207a911b24392d242a41a59d55640b62fe428461fd19d4de9c4","valid"],
    ["16eebb2d81dd67d2304776322442ffcff71217eef673b796a8dd12e2efa7c237","valid"],
    ["4148e959ee882548033af49bae738e0b9933d23cac08deff398b703d70438916","more specific please"],
    ["ac803ee8872308aa22dfb38aeb59fc05fee4143c5c68e1fc20c52e0756d73b3e","valid"],

    ["e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683","why would it be one character long"],
    ["44778d82365e4af681c40d5f0eef5cf6f5899d3f0ac335050a7ed6779cf3f674","valid"],
    ["066b91577bc547e21aa329c74d74b0e53e29534d4cc0ad455abba050121a9557","missing a character"],
    ["3c04a6811e48db80da3339cabefd36eb1cfe0c7f06aa252f49d9c30c19ff399a","valid"],

    ["6227cb60706f7649efdb630d111c41e4941473c1446404a35a683740ed84de67","valid.. did you really need to check?"],
    ["7b7903a25b687f52ec49ebecb85f663fd57f7a4d288cb21350618be2671cc5d9","valid"],
    ["8248dd5f597ae9d5cef522af1a19711d03e5eecbe01eb86f0d1920472facca00","valid"],
    ["bf2cc4be5a64a4af30af602d186c063bbde22a8e45e531a8347200eee7973a9d","valid"],

    ["5cdb82c3c90023b74e76bbbd8b34a713b9e0fa7fb8cab3ff9731e481abab02ea","valid"],

    ["87140dddf781910380bc5c8b72524af80c87361abfdf6d04f42caba9b4330be5","valid"],
    ["606b97b4cf4af8807b23d85d3b941810f7fdc61b970bfbc56338ccea447f891a","valid"],
    ["d2c52cf0b61aa33a3068da204d5460ec07b81ebe7ca694d65da6d957d82b6e32","give me a litttle more?"]
    ["3ce9cb376d1cd7163ee6ab5584edb9da966694e545583957055c984b765cfbad","valid"],
    ["ae6f47226dd91ae9ef0e88e8374ad0e338d1793da23681c2290be1d706ef403b","valid"],
    ["c2d214a484e9d44d34c0c26cca27b34d0eca755d7d7341549885efc7ef592425","valid"],
    ["fb6b00e8e1da5207a911b24392d242a41a59d55640b62fe428461fd19d4de9c4","valid"]
];

async function checkAll() {
    const input = document.getElementById('input').value;
    const hashed = (await hash(input)).toString();

    for(var i=0;i<hashes.length;i++){
        if(hashes[i]){
          if(hashed.toString() == hashes[i][0].toString()){
            alert(hashes[i][1]);
            return;
          }
        }
    }

    if(input === "iamcheaterandiamevil1283"){}

    alert("invalid")
}