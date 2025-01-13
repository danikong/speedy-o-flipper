function _board_outline_extrude_3_outline_fn(){
    return new CSG.Path2D([[225.0923238,-153.7511196],[229.0132719,-157.2971666]]).appendArc([229.2897865,-159.9560868],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.5306934,-173.3883264]).appendArc([216.7370888,-173.8307897],{"radius":2,"clockwise":true,"large":false}).appendPoint([203.9127706,-164.5133771]).appendArc([203.6613231,-164.3577153],{"radius":2,"clockwise":false,"large":false}).appendPoint([201.4564803,-163.2089579]).appendArc([201.1503912,-163.0805405],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.7525218,-158.7273089]).appendArc([187.4695302,-158.657685],{"radius":2,"clockwise":false,"large":false}).appendPoint([184.9794778,-158.2345692]).appendArc([184.6444354,-158.2063062],{"radius":2,"clockwise":false,"large":false}).appendPoint([167.6734126,-158.2063062]).appendArc([166.2215072,-157.5817954],{"radius":2,"clockwise":true,"large":false}).appendPoint([162.0047908,-153.130817]).appendArc([160.5528853,-152.5063062],{"radius":2,"clockwise":false,"large":false}).appendPoint([135.1158052,-152.5063062]).appendArc([133.8648944,-152.9457864],{"radius":2,"clockwise":false,"large":false}).appendPoint([130.3678888,-155.7489816]).appendArc([129.3953242,-156.1689978],{"radius":2,"clockwise":true,"large":false}).appendPoint([92.7052066,-161.3254576]).appendArc([90.4463243,-159.6232677],{"radius":2,"clockwise":true,"large":false}).appendPoint([81.0660573,-92.8791997]).appendArc([82.7682472,-90.6203174],{"radius":2,"clockwise":true,"large":false}).appendPoint([99.8437761,-88.2205083]).appendArc([100.8269701,-87.7919118],{"radius":2,"clockwise":false,"large":false}).appendPoint([124.8619475,-68.2543666]).appendArc([126.1234877,-67.8063062],{"radius":2,"clockwise":true,"large":false}).appendPoint([141.0569838,-67.8063062]).appendArc([142.0894716,-67.5191894],{"radius":2,"clockwise":false,"large":false}).appendPoint([144.7259162,-65.9299993]).appendArc([145.7820134,-65.643022],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.1075106,-65.8003369]).appendArc([160.055187,-66.0518829],{"radius":2,"clockwise":true,"large":false}).appendPoint([162.7601152,-67.5546207]).appendArc([163.731401,-67.8063061],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.5224241,-67.8063061]).appendArc([180.0090125,-68.4683767],{"radius":2,"clockwise":true,"large":false}).appendPoint([181.2131489,-69.8063062]).appendPoint([196.2089861,-69.8063062]).appendArc([197.9765619,-70.8705308],{"radius":2,"clockwise":true,"large":false}).appendPoint([198.6497359,-72.1420816]).appendArc([200.4173117,-73.2063062],{"radius":2,"clockwise":false,"large":false}).appendPoint([222.4131489,-73.2063062]).appendArc([224.4131489,-75.2063062],{"radius":2,"clockwise":true,"large":false}).appendPoint([224.4131489,-148.0014499]).appendArc([224.4131724,-148.0111509],{"radius":2,"clockwise":false,"large":false}).appendPoint([224.4338666,-152.2774709]).appendArc([225.0923239,-153.7511195],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function _keycap_outlines_extrude_6_outline_fn(){
    return new CSG.Path2D([[205.3030558,-163.1131459],[216.2247852,-171.0482468]]).appendArc([219.0183897,-170.6057835],{"radius":2,"clockwise":false,"large":false}).appendPoint([226.3657054,-160.493071]).appendArc([225.923242,-157.6994666],{"radius":2,"clockwise":false,"large":false}).appendPoint([215.0015126,-149.7643656]).appendArc([212.2079081,-150.2068289],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.8605924,-160.3195414]).appendArc([205.3030558,-163.1131458],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[170.8631489,-156.2563062],[184.3631489,-156.2563062]]).appendArc([186.3631489,-154.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.3631489,-141.7563062]).appendArc([184.3631489,-139.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.8631489,-139.7563062]).appendArc([168.8631489,-141.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([168.8631489,-154.2563062]).appendArc([170.8631489,-156.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[181.6631489,-88.2563062],[195.1631489,-88.2563062]]).appendArc([197.1631489,-86.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.1631489,-73.7563062]).appendArc([195.1631489,-71.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([181.6631489,-71.7563062]).appendArc([179.6631489,-73.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.6631489,-86.2563062]).appendArc([181.6631489,-88.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[181.6631489,-105.2563062],[195.1631489,-105.2563062]]).appendArc([197.1631489,-103.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.1631489,-90.7563062]).appendArc([195.1631489,-88.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([181.6631489,-88.7563062]).appendArc([179.6631489,-90.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.6631489,-103.2563062]).appendArc([181.6631489,-105.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[181.6631489,-122.2563062],[195.1631489,-122.2563062]]).appendArc([197.1631489,-120.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.1631489,-107.7563062]).appendArc([195.1631489,-105.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([181.6631489,-105.7563062]).appendArc([179.6631489,-107.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.6631489,-120.2563062]).appendArc([181.6631489,-122.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[181.6631489,-139.2563062],[195.1631489,-139.2563062]]).appendArc([197.1631489,-137.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.1631489,-124.7563062]).appendArc([195.1631489,-122.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([181.6631489,-122.7563062]).appendArc([179.6631489,-124.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.6631489,-137.2563062]).appendArc([181.6631489,-139.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[163.6631489,-86.2563061],[177.1631489,-86.2563061]]).appendArc([179.1631489,-84.2563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.1631489,-71.7563061]).appendArc([177.1631489,-69.7563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.6631489,-69.7563061]).appendArc([161.6631489,-71.7563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.6631489,-84.2563061]).appendArc([163.6631489,-86.2563061],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[163.6631489,-103.2563061],[177.1631489,-103.2563061]]).appendArc([179.1631489,-101.2563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.1631489,-88.7563061]).appendArc([177.1631489,-86.7563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.6631489,-86.7563061]).appendArc([161.6631489,-88.7563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.6631489,-101.2563061]).appendArc([163.6631489,-103.2563061],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[163.6631489,-120.2563061],[177.1631489,-120.2563061]]).appendArc([179.1631489,-118.2563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.1631489,-105.7563061]).appendArc([177.1631489,-103.7563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.6631489,-103.7563061]).appendArc([161.6631489,-105.7563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.6631489,-118.2563061]).appendArc([163.6631489,-120.2563061],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[163.6631489,-137.2563061],[177.1631489,-137.2563061]]).appendArc([179.1631489,-135.2563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.1631489,-122.7563061]).appendArc([177.1631489,-120.7563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.6631489,-120.7563061]).appendArc([161.6631489,-122.7563061],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.6631489,-135.2563061]).appendArc([163.6631489,-137.2563061],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[145.663149,-84.2563062],[159.163149,-84.2563062]]).appendArc([161.163149,-82.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.163149,-69.7563062]).appendArc([159.163149,-67.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([145.663149,-67.7563062]).appendArc([143.663149,-69.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([143.663149,-82.2563062]).appendArc([145.663149,-84.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[145.663149,-101.2563062],[159.163149,-101.2563062]]).appendArc([161.163149,-99.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.163149,-86.7563062]).appendArc([159.163149,-84.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([145.663149,-84.7563062]).appendArc([143.663149,-86.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([143.663149,-99.2563062]).appendArc([145.663149,-101.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[145.663149,-118.2563062],[159.163149,-118.2563062]]).appendArc([161.163149,-116.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.163149,-103.7563062]).appendArc([159.163149,-101.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([145.663149,-101.7563062]).appendArc([143.663149,-103.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([143.663149,-116.2563062]).appendArc([145.663149,-118.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[145.663149,-135.2563062],[159.163149,-135.2563062]]).appendArc([161.163149,-133.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.163149,-120.7563062]).appendArc([159.163149,-118.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([145.663149,-118.7563062]).appendArc([143.663149,-120.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([143.663149,-133.2563062]).appendArc([145.663149,-135.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[127.6631489,-86.2563062],[141.1631489,-86.2563062]]).appendArc([143.1631489,-84.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([143.1631489,-71.7563062]).appendArc([141.1631489,-69.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([127.6631489,-69.7563062]).appendArc([125.6631489,-71.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([125.6631489,-84.2563062]).appendArc([127.6631489,-86.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[127.6631489,-103.2563062],[141.1631489,-103.2563062]]).appendArc([143.1631489,-101.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([143.1631489,-88.7563062]).appendArc([141.1631489,-86.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([127.6631489,-86.7563062]).appendArc([125.6631489,-88.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([125.6631489,-101.2563062]).appendArc([127.6631489,-103.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[127.6631489,-120.2563062],[141.1631489,-120.2563062]]).appendArc([143.1631489,-118.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([143.1631489,-105.7563062]).appendArc([141.1631489,-103.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([127.6631489,-103.7563062]).appendArc([125.6631489,-105.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([125.6631489,-118.2563062]).appendArc([127.6631489,-120.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[127.6631489,-137.2563062],[141.1631489,-137.2563062]]).appendArc([143.1631489,-135.2563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([143.1631489,-122.7563062]).appendArc([141.1631489,-120.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([127.6631489,-120.7563062]).appendArc([125.6631489,-122.7563062],{"radius":2,"clockwise":false,"large":false}).appendPoint([125.6631489,-135.2563062]).appendArc([127.6631489,-137.2563062],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[112.2886938,-156.6040142],[125.6573128,-154.7251773]]).appendArc([127.3595027,-152.466295],{"radius":2,"clockwise":false,"large":false}).appendPoint([125.6198389,-140.0879441]).appendArc([123.3609566,-138.3857542],{"radius":2,"clockwise":false,"large":false}).appendPoint([109.9923376,-140.2645911]).appendArc([108.2901477,-142.5234734],{"radius":2,"clockwise":false,"large":false}).appendPoint([110.0298115,-154.9018243]).appendArc([112.2886938,-156.6040142],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[105.1908657,-106.1003426],[118.5594847,-104.2215057]]).appendArc([120.2616746,-101.9626234],{"radius":2,"clockwise":false,"large":false}).appendPoint([118.5220108,-89.5842725]).appendArc([116.2631285,-87.8820826],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.8945095,-89.7609195]).appendArc([101.1923196,-92.0198018],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.9319834,-104.3981527]).appendArc([105.1908657,-106.1003426],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[94.4638686,-159.10913],[107.8324876,-157.2302931]]).appendArc([109.5346775,-154.9714108],{"radius":2,"clockwise":false,"large":false}).appendPoint([107.7950137,-142.5930599]).appendArc([105.5361314,-140.89087],{"radius":2,"clockwise":false,"large":false}).appendPoint([92.1675124,-142.7697069]).appendArc([90.4653225,-145.0285892],{"radius":2,"clockwise":false,"large":false}).appendPoint([92.2049863,-157.4069401]).appendArc([94.4638686,-159.10913],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[89.7319832,-125.4400156],[103.1006022,-123.5611787]]).appendArc([104.8027921,-121.3022964],{"radius":2,"clockwise":false,"large":false}).appendPoint([103.0631283,-108.9239455]).appendArc([100.804246,-107.2217556],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.435627,-109.1005925]).appendArc([85.7334371,-111.3594748],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.4731009,-123.7378257]).appendArc([89.7319832,-125.4400156],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[92.0979259,-142.2745728],[105.4665449,-140.3957359]]).appendArc([107.1687348,-138.1368536],{"radius":2,"clockwise":false,"large":false}).appendPoint([105.429071,-125.7585027]).appendArc([103.1701887,-124.0563128],{"radius":2,"clockwise":false,"large":false}).appendPoint([89.8015697,-125.9351497]).appendArc([88.0993798,-128.194032],{"radius":2,"clockwise":false,"large":false}).appendPoint([89.8390436,-140.5723829]).appendArc([92.0979259,-142.2745728],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.9227511,-139.769457],[123.2913701,-137.8906201]]).appendArc([124.99356,-135.6317378],{"radius":2,"clockwise":false,"large":false}).appendPoint([123.2538962,-123.2533869]).appendArc([120.9950139,-121.551197],{"radius":2,"clockwise":false,"large":false}).appendPoint([107.6263949,-123.4300339]).appendArc([105.924205,-125.6889162],{"radius":2,"clockwise":false,"large":false}).appendPoint([107.6638688,-138.0672671]).appendArc([109.9227511,-139.769457],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[87.3660405,-108.6054584],[100.7346595,-106.7266215]]).appendArc([102.4368494,-104.4677392],{"radius":2,"clockwise":false,"large":false}).appendPoint([100.6971856,-92.0893883]).appendArc([98.4383033,-90.3871984],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.0696843,-92.2660353]).appendArc([83.3674944,-94.5249176],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.1071582,-106.9032685]).appendArc([87.3660405,-108.6054584],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[107.5568084,-122.9348998],[120.9254274,-121.0560629]]).appendArc([122.6276173,-118.7971806],{"radius":2,"clockwise":false,"large":false}).appendPoint([120.8879535,-106.4188297]).appendArc([118.6290712,-104.7166398],{"radius":2,"clockwise":false,"large":false}).appendPoint([105.2604522,-106.5954767]).appendArc([103.5582623,-108.854359],{"radius":2,"clockwise":false,"large":false}).appendPoint([105.2979261,-121.2327099]).appendArc([107.5568084,-122.9348998],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[188.6441272,-156.9666578],[201.4833902,-161.1383872]]).appendArc([204.0035372,-159.8543082],{"radius":2,"clockwise":false,"large":false}).appendPoint([207.8662496,-147.9661016]).appendArc([206.5821706,-145.4459546],{"radius":2,"clockwise":false,"large":false}).appendPoint([193.7429076,-141.2742252]).appendArc([191.2227606,-142.5583042],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.3600482,-154.4465108]).appendArc([188.6441272,-156.9666578],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 6] });
}




                function speedy-o_case_fn() {
                    

                // creating part 0 of case speedy-o
                let speedy-o__part_0 = _board_outline_extrude_3_outline_fn();

                // make sure that rotations are relative
                let speedy-o__part_0_bounds = speedy-o__part_0.getBounds();
                let speedy-o__part_0_x = speedy-o__part_0_bounds[0].x + (speedy-o__part_0_bounds[1].x - speedy-o__part_0_bounds[0].x) / 2
                let speedy-o__part_0_y = speedy-o__part_0_bounds[0].y + (speedy-o__part_0_bounds[1].y - speedy-o__part_0_bounds[0].y) / 2
                speedy-o__part_0 = translate([-speedy-o__part_0_x, -speedy-o__part_0_y, 0], speedy-o__part_0);
                speedy-o__part_0 = rotate([0,0,0], speedy-o__part_0);
                speedy-o__part_0 = translate([speedy-o__part_0_x, speedy-o__part_0_y, 0], speedy-o__part_0);

                speedy-o__part_0 = translate([0,0,0], speedy-o__part_0);
                let result = speedy-o__part_0;
                
            

                // creating part 1 of case speedy-o
                let speedy-o__part_1 = _keycap_outlines_extrude_6_outline_fn();

                // make sure that rotations are relative
                let speedy-o__part_1_bounds = speedy-o__part_1.getBounds();
                let speedy-o__part_1_x = speedy-o__part_1_bounds[0].x + (speedy-o__part_1_bounds[1].x - speedy-o__part_1_bounds[0].x) / 2
                let speedy-o__part_1_y = speedy-o__part_1_bounds[0].y + (speedy-o__part_1_bounds[1].y - speedy-o__part_1_bounds[0].y) / 2
                speedy-o__part_1 = translate([-speedy-o__part_1_x, -speedy-o__part_1_y, 0], speedy-o__part_1);
                speedy-o__part_1 = rotate([0,0,0], speedy-o__part_1);
                speedy-o__part_1 = translate([speedy-o__part_1_x, speedy-o__part_1_y, 0], speedy-o__part_1);

                speedy-o__part_1 = translate([0,0,0], speedy-o__part_1);
                result = result.union(speedy-o__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return speedy-o_case_fn();
            }

        