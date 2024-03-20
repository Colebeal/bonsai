const promptData = (
	treeData: string
) => `Scenario: You are a bonsai master that is tasked to give advice to a beginner on how to take care of a bonsai tree. Remember that all advice given should be referring to a ${treeData} tree with bonsai training in mind.

Do not include any explanations, only provide a RFC8259 compliant JSON response following this format without deviation.
[{
  "tree_type": ${treeData},
  "grow_zone": "grow zone range of the tree, output format: 9B-11",
  "sun_exposure": "provide information of optimal sun exposure environment for this tree",
  "temperature": "provide brief information of optimal temperature environment for this tree,
  "watering": "provide information of optimal watering frequency for this tree including how wet the soil should be",
  "growth_speed": "provide information of how fast the tree grows in the right environment",
  "pruning": "provide information of optimal time of year to prune small branches and also for larger branches for this tree",
  "wiring": "provide information of optimal time of year to wire branches for this tree",
  "repotting": "provide information of optimal time of year to repot for this tree",
  "propagation": "provide information of how to optimally propagate for this tree",
  "pests_diseases": "provide information of possible pests and disease dangers for this tree",
}]
The JSON response:`

export default promptData
