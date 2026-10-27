# Botanical artwork review

The illustrations are original SVG drawings. Botanical descriptions and reference photographs guided silhouettes and distinguishing features; no reference photos were copied into the app. Reflection stages are a visual growth metaphor, not an accurate botanical development timeline. Cultivar variegation varies between real specimens.

## Key reference checks

- Moth orchid: broad basal leaves, arched flower spike, broad petals/sepals and a differentiated lip. [RHS Phalaenopsis](https://www.rhs.org.uk/plants/phalaenopsis)
- Jewel orchid: low dark oval foliage with fine contrasting venation; a small pale flower spike, rather than moth-orchid blooms. [NC State Ludisia](https://plants.ces.ncsu.edu/plants/ludisia-discolor/common-name/jewel-orchid/)
- Begonia maculata: asymmetric pointed leaves, cane habit and silver dots. [RHS profile](https://www.rhs.org.uk/plants/112222/begonia-maculata-c/details)
- Maidenhair fern: fine dark branching stems and fan-shaped leaflets, kept separate from the Boston fern renderer. [RHS Adiantum](https://www.rhs.org.uk/plants/20650/adiantum-raddianum/details)
- Tropical pitcher plant: lance-shaped leaves, thin tendrils and hanging pitchers with lids. [RHS Nepenthes](https://www.rhs.org.uk/plants/11476/nepenthes/details)
- Flytrap: low rosette and paired open traps, with marginal teeth. [RHS carnivorous plants](https://www.rhs.org.uk/plants/types/carnivorous)
- Golden barrel: a rounded ribbed globe, areoles and radiating golden spines. [RHS Echinocactus](https://www.rhs.org.uk/plants/6253/echinocactus-grusonii-golden-barrel-cactus-golden-ball-cactus/details)
- Prickly pear: connected flattened oval pads with areoles; no barrel silhouette. [NC State Opuntia](https://plants.ces.ncsu.edu/plants/opuntia/)
- Echeveria: compact layered rosette of fleshy leaves, separate from aloe's long serrated leaves. [RHS Echeveria](https://www.rhs.org.uk/plants/echeveria) and [RHS Aloe](https://www.rhs.org.uk/plants/aloe)
- Lithops: low paired fleshy bodies with flattened patterned tops and a central fissure. [RHS Lithops](https://www.rhs.org.uk/plants/25292/lithops/details)
- String of pearls: spherical leaves spaced along thin cascading stems. [RHS Curio](https://www.rhs.org.uk/plants/string-of-beads/how-to-grow-string-of-beads)
- Rat-tail cactus: trailing cylindrical ribbed stems with fine spines; mature illustration includes a magenta bloom. [RHS rat-tail cactus](https://www.rhs.org.uk/plants/25289/aporocactus-flagelliformis/details)
- Cebu Blue: blue-green pointed foliage; plain Neon is solid chartreuse. [Costa Farms Cebu Blue](https://costafarms.com/products/medium-pothos-cebu-blue-parent)

Additional corrections: Hoya waxy oval leaves and cream margins; serrated or lobed Philodendron forms separated from Monstera; deeply cut Burle Marx Flame and long pendent Queen Anthurium separated from the generic narrow-leaf renderer.

## Verification

Reviewed rendered comparison sheets at mature and early stages, plus small shelf-style thumbnails. All 51 plants were checked across four growth stages and three pots for invalid values; 153 SVG samples parsed as valid XML. All 13 new room plants have distinct drawing output, independent of their labels. Existing room, history, coins and placement checks passed. Browser layout and touch behavior remain separate from this artwork check.


## Seven-entry flowering milestone (October 23, 2026)
Curated bloom reward: moth orchid, jewel orchid, polka-dot begonia, Hoya Krimson Queen, Venus flytrap, golden barrel, prickly pear, echeveria, lithops, aloe vera, string of pearls, rat-tail cactus, snake plant and Moonshine snake plant. Other catalogue plants receive no added milestone flowers; this is not a claim that every other species is botanically incapable of flowering. Ferns are excluded. Seven entries is a symbolic app milestone, not a real horticultural timetable: golden barrel and indoor snake plants in particular flower infrequently or after maturity.

Flowers match their architecture: orchid lip/petals; jewel orchid white spike; begonia pale drooping clusters; hoya waxy star umbels; flytrap white flowers held above its traps; yellow crown/pad cactus flowers; echeveria bell clusters; lithops daisy from the leaf fissure; aloe yellow tubular raceme; pearls small white heads; rat-tail pink lateral flower; snake plant narrow cream raceme. Existing early orchid/jewel/rat-tail blooms now wait until growth 7.

References checked:
- RHS Hoya growing guide: https://www.rhs.org.uk/plants/hoya/how-to-grow
- RHS moth orchids: https://www.rhs.org.uk/plants/phalaenopsis
- NC State jewel orchid: https://plants.ces.ncsu.edu/plants/ludisia-discolor/
- NC State cane begonias: https://plants.ces.ncsu.edu/plants/begonia-cane-types/
- NC State flytrap flowers: https://craven.ces.ncsu.edu/news/venus-flytrap-flowers/
- RHS golden barrel: https://www.rhs.org.uk/plants/6253/echinocactus-grusonii/details
- RHS Echeveria: https://www.rhs.org.uk/plants/echeveria
- RHS Lithops: https://www.rhs.org.uk/plants/25292/lithops/details
- RHS Aloe: https://www.rhs.org.uk/plants/aloe
- NC State string of pearls: https://plants.ces.ncsu.edu/plants/curio-rowleyanus/
- Kew snake plant: https://www.kew.org/plants/snake-plant

Verification: `node bloom-test.cjs` checks all 51 species at growth 0–7, including hanging art, seven-entry completion, reloads, new plants and continued entries. `evidence/bloom-review.png` is a rendered SVG contact sheet, not a browser screenshot.


## Twenty-species expansion
Glasshouse: Strelitzia reginae, Medinilla magnifica, Guzmania lingulata, Passiflora caerulea, Streptocarpus ionanthus, Goeppertia orbifolia, Platycerium bifurcatum, Drosera capensis.
Desert: Carnegiea gigantea, Pachycereus marginatus, Espostoa lanata, Pilosocereus pachycladus, Stenocereus thurberi, Acanthocereus tetragonus, Astrophytum myriostigma, Adenium obesum, Beaucarnea recurvata, Haworthiopsis attenuata, Kalanchoe tomentosa, Agave victoriae-reginae.
The new entries have distinct scientific identities; common-name synonyms are not additional choices. Existing older named variegated cultivars remain unchanged. Original vector drawings distinguish arm branching, clustered stems, wool, blue wax, angular towers, ribbed star body, caudex, strap leaves, antler fronds, and leaf pattern. `habitat-art.js` supplies these 20 independent entries.

New bloom rewards use six Glasshouse plants (all additions except orbifolia and staghorn) and nine desert plants (six tall cactuses, bishop’s cap, desert rose, zebra haworthia). No bloom is invented for the fern. Ponytail, panda, agave and orbifolia receive no added bloom reward; they are not being declared incapable of flowering. Mature/rarely blooming cactuses flower symbolically at seven entries, not on a realistic seven-day growth schedule. Guzmania red coloration is bracts, with the small true flowers shown separately.

Primary reference pages checked (RHS, NPS and botanical gardens):
- https://www.rhs.org.uk/plants/strelitzia
- https://www.chicagobotanic.org/plant-information/plant-finder/medinilla-magnifica-showy-medinilla
- https://www.rhs.org.uk/plants/8142/guzmania-lingulata/details
- https://www.rhs.org.uk/plants/12356/passiflora-caerulea/details
- https://www.rhs.org.uk/plants/377794/streptocarpus-ionanthus-av/details
- https://www.rhs.org.uk/plants/357191/goeppertia-orbifolia/details
- https://www.rhs.org.uk/plants/13234/platycerium-bifurcatum/details
- https://www.rhs.org.uk/plants/6136/drosera-capensis/details
- https://www.nps.gov/orpi/learn/nature/saguaro-cactus.htm
- https://www.nps.gov/orpi/learn/nature/organ-pipe-cactus.htm
- https://www.rhs.org.uk/plants/141267/pachycereus-marginatus/details
- https://www.rhs.org.uk/plants/6868/espostoa-lanata/details
- https://www.rhs.org.uk/plants/250738/pilosocereus-pachycladus/details
- https://www.rhs.org.uk/plants/141428/acanthocereus-tetragonus/details
- https://www.rhs.org.uk/plants/1878/astrophytum-myriostigma/details
- https://www.rhs.org.uk/plants/426/adenium-obesum/details
- https://www.rhs.org.uk/plants/1993/beaucarnea-recurvata/details
- https://www.rhs.org.uk/plants/87858/aloe-attenuata/details
- https://www.rhs.org.uk/plants/9701/kalanchoe-tomentosa/details
- https://www.rhs.org.uk/plants/698/agave-victoriae-reginae/details

Artwork QA: rendered a 20-entry contact sheet and parsed 80 stage SVGs as XML; all 71 species passed the general rendering and milestone tests. Layout behavior is checked with the existing DOM simulation; browser/device QA remains unverified.
