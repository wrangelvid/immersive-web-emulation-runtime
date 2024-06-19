/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HandPose } from '../../XRHandInput.js';

export const pinchHandPose: HandPose = {
	jointTransforms: {
		wrist: {
			offsetMatrix: [
				0.9060805439949036, -0.1844543218612671, 0.3807799518108368, 0,
				-0.08027800172567368, 0.8086723685264587, 0.5827555656433105, 0,
				-0.4154181182384491, -0.5585917234420776, 0.7179155349731445, 0,
				-0.06867414712905884, -0.009423808194696903, 0.10627774149179459, 1,
			],
			radius: 0.021460847929120064,
		},
		'thumb-metacarpal': {
			offsetMatrix: [
				-0.5012241005897522, -0.8650535345077515, -0.0213695727288723, 0,
				0.7415963411331177, -0.4421543478965759, 0.5045139193534851, 0,
				-0.44587990641593933, 0.23702676594257355, 0.8631392121315002, 0,
				-0.032122574746608734, -0.01196830440312624, 0.07194234430789948, 1,
			],
			radius: 0.019382517784833908,
		},
		'thumb-phalanx-proximal': {
			offsetMatrix: [
				-0.3175753057003021, -0.9460570216178894, -0.06419729441404343, 0,
				0.8958902955055237, -0.32153913378715515, 0.30658137798309326, 0,
				-0.3106854259967804, 0.03984907269477844, 0.9496771097183228, 0,
				-0.017625702545046806, -0.01967475935816765, 0.04387917369604111, 1,
			],
			radius: 0.01228295173496008,
		},
		'thumb-phalanx-distal': {
			offsetMatrix: [
				-0.4944636821746826, -0.8691971898078918, 0.001086252392269671, 0,
				0.8307800889015198, -0.4722411036491394, 0.2946045398712158, 0,
				-0.25555649399757385, 0.14657381176948547, 0.9556186199188232, 0,
				-0.007126678712666035, -0.021021386608481407, 0.011786630377173424, 1,
			],
			radius: 0.009768804535269737,
		},
		'thumb-tip': {
			offsetMatrix: [
				-0.4944636821746826, -0.8691971898078918, 0.001086252392269671, 0,
				0.8307800889015198, -0.4722411036491394, 0.2946045398712158, 0,
				-0.25555649399757385, 0.14657381176948547, 0.9556186199188232, 0,
				0.0003423091256991029, -0.024528030306100845, -0.011410919018089771, 1,
			],
			radius: 0.008768804371356964,
		},
		'index-finger-metacarpal': {
			offsetMatrix: [
				0.9060805439949036, -0.1844543218612671, 0.3807799518108368, 0,
				-0.08027800172567368, 0.8086723685264587, 0.5827555656433105, 0,
				-0.4154181182384491, -0.5585917234420776, 0.7179155349731445, 0,
				-0.038037415593862534, -0.0020236473064869642, 0.07626739144325256, 1,
			],
			radius: 0.021228281781077385,
		},
		'index-finger-phalanx-proximal': {
			offsetMatrix: [
				0.7986818552017212, -0.35985732078552246, 0.48229536414146423, 0,
				0.538311243057251, 0.7854709625244141, -0.30537736415863037, 0,
				-0.2689369022846222, 0.5035246014595032, 0.8210577368736267, 0,
				-0.006869405973702669, 0.033938243985176086, 0.04206443578004837, 1,
			],
			radius: 0.010295259766280651,
		},
		'index-finger-phalanx-intermediate': {
			offsetMatrix: [
				0.8285930156707764, -0.32672837376594543, 0.4546217918395996, 0,
				0.5577570199966431, 0.4116027057170868, -0.7207564115524292, 0,
				0.04836784675717354, 0.8507823944091797, 0.5232869386672974, 0,
				0.0033306588884443045, 0.014840902760624886, 0.010923954658210278, 1,
			],
			radius: 0.00853810179978609,
		},
		'index-finger-phalanx-distal': {
			offsetMatrix: [
				0.8412464261054993, -0.35794928669929504, 0.4051857888698578, 0,
				0.5139996409416199, 0.29711154103279114, -0.8046918511390686, 0,
				0.16765329241752625, 0.8852096796035767, 0.4339304566383362, 0,
				0.0021551470272243023, -0.0058362227864563465, -0.0017938464879989624,
				1,
			],
			radius: 0.007636196445673704,
		},
		'index-finger-tip': {
			offsetMatrix: [
				0.8412464261054993, -0.35794928669929504, 0.4051857888698578, 0,
				0.5139996409416199, 0.29711154103279114, -0.8046918511390686, 0,
				0.16765329241752625, 0.8852096796035767, 0.4339304566383362, 0,
				-0.00131594471167773, -0.025222131982445717, -0.012442642822861671, 1,
			],
			radius: 0.006636196281760931,
		},
		'middle-finger-metacarpal': {
			offsetMatrix: [
				0.9060805439949036, -0.1844543218612671, 0.3807799518108368, 0,
				-0.08027800172567368, 0.8086723685264587, 0.5827555656433105, 0,
				-0.4154181182384491, -0.5585917234420776, 0.7179155349731445, 0,
				-0.05395089089870453, 0.003063359996303916, 0.07402937114238739, 1,
			],
			radius: 0.021231964230537415,
		},
		'middle-finger-phalanx-proximal': {
			offsetMatrix: [
				0.9187911748886108, -0.1530158370733261, 0.36387869715690613, 0,
				0.038666240870952606, 0.9522662162780762, 0.302808940410614, 0,
				-0.3928440511226654, -0.26414817571640015, 0.8808513283729553, 0,
				-0.02717282809317112, 0.04162866622209549, 0.03678669035434723, 1,
			],
			radius: 0.01117393933236599,
		},
		'middle-finger-phalanx-intermediate': {
			offsetMatrix: [
				0.9228746294975281, -0.12856416404247284, 0.36300456523895264, 0,
				0.14524033665657043, 0.9892153143882751, -0.01890045404434204, 0,
				-0.3566599190235138, 0.07016586512327194, 0.9315956234931946, 0,
				-0.01030921470373869, 0.05296773463487625, -0.0010256498353555799, 1,
			],
			radius: 0.008030958473682404,
		},
		'middle-finger-phalanx-distal': {
			offsetMatrix: [
				0.9325166344642639, -0.040404170751571655, 0.35885775089263916, 0,
				0.06836572289466858, 0.995502769947052, -0.0655682161450386, 0,
				-0.3545948565006256, 0.08567725121974945, 0.9310863614082336, 0,
				-0.0004833847051486373, 0.05103470757603645, -0.026690717786550522, 1,
			],
			radius: 0.007629410829395056,
		},
		'middle-finger-tip': {
			offsetMatrix: [
				0.9325166344642639, -0.040404170751571655, 0.35885775089263916, 0,
				0.06836572289466858, 0.995502769947052, -0.0655682161450386, 0,
				-0.3545948565006256, 0.08567725121974945, 0.9310863614082336, 0,
				0.008158999495208263, 0.05004044249653816, -0.050120558589696884, 1,
			],
			radius: 0.006629410665482283,
		},
		'ring-finger-metacarpal': {
			offsetMatrix: [
				0.9060805439949036, -0.1844543218612671, 0.3807799518108368, 0,
				-0.08027800172567368, 0.8086723685264587, 0.5827555656433105, 0,
				-0.4154181182384491, -0.5585917234420776, 0.7179155349731445, 0,
				-0.06732909381389618, 0.007902119308710098, 0.07209732383489609, 1,
			],
			radius: 0.019088275730609894,
		},
		'ring-finger-phalanx-proximal': {
			offsetMatrix: [
				0.9391821026802063, -0.027994679287075996, 0.34227466583251953, 0,
				-0.18282271921634674, 0.8029410243034363, 0.5673282742500305, 0,
				-0.2907087206840515, -0.5954000353813171, 0.7489906549453735, 0,
				-0.047129884362220764, 0.03806127607822418, 0.032147664576768875, 1,
			],
			radius: 0.00992213748395443,
		},
		'ring-finger-phalanx-intermediate': {
			offsetMatrix: [
				0.9249380826950073, 0.03699534013867378, 0.3783116042613983, 0,
				-0.12898847460746765, 0.9667453765869141, 0.2208271026611328, 0,
				-0.3575615882873535, -0.25304901599884033, 0.8989526629447937, 0,
				-0.03579339757561684, 0.06127955764532089, 0.002939916681498289, 1,
			],
			radius: 0.007611672393977642,
		},
		'ring-finger-phalanx-distal': {
			offsetMatrix: [
				0.9001164436340332, 0.03983335196971893, 0.4338230490684509, 0,
				-0.09662467986345291, 0.9892624020576477, 0.10964841395616531, 0,
				-0.4247973561286926, -0.14061418175697327, 0.8943013548851013, 0,
				-0.026291755959391594, 0.06800390034914017, -0.02094830758869648, 1,
			],
			radius: 0.007231088820844889,
		},
		'ring-finger-tip': {
			offsetMatrix: [
				0.9001164436340332, 0.03983335196971893, 0.4338230490684509, 0,
				-0.09662467986345291, 0.9892624020576477, 0.10964841395616531, 0,
				-0.4247973561286926, -0.14061418175697327, 0.8943013548851013, 0,
				-0.016345610842108727, 0.07300511747598648, -0.04263874143362045, 1,
			],
			radius: 0.0062310886569321156,
		},
		'pinky-finger-metacarpal': {
			offsetMatrix: [
				0.8769711852073669, 0.31462907791137695, 0.36322021484375, 0,
				-0.4506046175956726, 0.801031768321991, 0.39408499002456665, 0,
				-0.16696058213710785, -0.5092697143554688, 0.8442559838294983, 0,
				-0.07460174709558487, 0.0062340241856873035, 0.06756893545389175, 1,
			],
			radius: 0.01808827556669712,
		},
		'pinky-finger-phalanx-proximal': {
			offsetMatrix: [
				0.9498357176780701, 0.1553308218717575, 0.2714462876319885, 0,
				-0.3019258379936218, 0.6817675232887268, 0.6663586497306824, 0,
				-0.08155745267868042, -0.7148879170417786, 0.694466233253479, 0,
				-0.06697750836610794, 0.029482364654541016, 0.02902858518064022, 1,
			],
			radius: 0.008483353070914745,
		},
		'pinky-finger-phalanx-intermediate': {
			offsetMatrix: [
				0.9214097261428833, 0.27928245067596436, 0.2701927423477173, 0,
				-0.3670244514942169, 0.8538867831230164, 0.36901235580444336, 0,
				-0.12765564024448395, -0.43917882442474365, 0.8892839550971985, 0,
				-0.06447203457355499, 0.05144399777054787, 0.0076942890882492065, 1,
			],
			radius: 0.0067641944624483585,
		},
		'pinky-finger-phalanx-distal': {
			offsetMatrix: [
				0.9038633704185486, 0.23618005216121674, 0.3567195236682892, 0,
				-0.3532794713973999, 0.8823202252388, 0.3109731376171112, 0,
				-0.24129553139209747, -0.4070987403392792, 0.8809353709220886, 0,
				-0.06187915802001953, 0.060364335775375366, -0.010368337854743004, 1,
			],
			radius: 0.0064259846694767475,
		},
		'pinky-finger-tip': {
			offsetMatrix: [
				0.9038633704185486, 0.23618005216121674, 0.3567195236682892, 0,
				-0.3532794713973999, 0.8823202252388, 0.3109731376171112, 0,
				-0.24129553139209747, -0.4070987403392792, 0.8809353709220886, 0,
				-0.056796226650476456, 0.07042007893323898, -0.02921444922685623, 1,
			],
			radius: 0.005425984505563974,
		},
	},
	gripOffsetMatrix: [
		0.08027800917625427, -0.8086723685264587, -0.5827556252479553, 0,
		-0.4154181480407715, -0.5585916638374329, 0.7179154753684998, 0,
		-0.9060805439949036, 0.1844543218612671, -0.3807799518108368, 0,
		-0.038054611533880234, -0.002910431008785963, 0.03720742464065552, 1,
	],
};