**THIS CHECKLIST IS NOT COMPLETE**. Use `--show-ignored-findings` to show all the results.
Summary
 - [solc-version](#solc-version) (3 results) (Informational)
 - [naming-convention](#naming-convention) (1 results) (Informational)
## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-0
Pragma version[^0.8.20](src/vLDY.sol#L2) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

src/vLDY.sol#L2


 - [ ] ID-1
solc-0.8.20 is not recommended for deployment

 - [ ] ID-2
Pragma version[^0.8.20](src/LDY.sol#L2) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

src/LDY.sol#L2


## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-3
Contract [vLDY](src/vLDY.sol#L12-L16) is not in CapWords

src/vLDY.sol#L12-L16


