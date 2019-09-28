// images.js
const meepleIcons = [
  {
    id: 1,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIRofficermeeple.png",
    description: "Officer",
    title: "foo"
  },
  {
    id: 2,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIRwarrantmeeple.png",
    description: " Warrant"
  },
  {
    id: 3,
    src: "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIVEXECmeeple.png",
    description: "Exec"
  },
  {
    id: 4,
    src: "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNEnlistedmeeple.png",
    description: "Enlisted"
  },
  {
    id: 5,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficerDeputymeeple.png",
    description: "Deputy Officer"
  },
  {
    id: 6,
    src: "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficermeeple.png",
    description: "Officer"
  },
  {
    id: 7,
    src:
      "/assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficerSkippermeeple.png",
    description: "Officer Skipper"
  },
  {
    id: 8,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantDeputymeeple.png",
    description: "Warrant Deputy"
  },
  {
    id: 9,
    src: "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantmeeple.png",
    description: "Warrant"
  },
  {
    id: 10,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantSkippermeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 11,
    src: "./assets/StarshipImages/SmallIcons/MeepleIcons/CADETenlistmeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 12,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/CADETofficermeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 13,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/CAPTAINofficermeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 14,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/CAPTAINwarrantmeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 15,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIRofficermeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 16,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIRwarrantmeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 17,
    src: "./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIVEXECmeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 18,
    src: "./assets/StarshipImages/SmallIcons/MeepleIcons/ENGEnlistedmeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 19,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficerDeputymeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 20,
    src: "./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficermeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 21,
    src:
      "./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficerSkippermeeple.png",
    description: "Place Holder Title"
  },
  {
    id: 21,
    src: "./assets/StarshipImages/SmallIcons/MeepleIcons/AGN DIV icon3.svg",
    description: "Place Holder Title"
  }
];
const departmentIcons = [
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Astr.png",
    title: "foo",
    description: "Astr"
  },
  {
    id: 2,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/DySp.png",
    title: "foo",
    description: "DySp"
  },
  {
    id: 3,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Navi.png",
    title: "foo",
    description: "Navi"
  },
  {
    id: 4,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/PiFt.png",
    title: "foo",
    description: "PiFt"
  },
  {
    id: 5,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/PiSh.png",
    title: "foo",
    description: "Pish"
  },
  {
    id: 2,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/BiCh.png",
    title: "foo",
    description: "BiCh"
  },
  {
    id: 3,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Btny.png",
    title: "foo",
    description: "Btny"
  },
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Cnsl.png",
    title: "foo",
    description: "Cnsl"
  },
  {
    id: 15,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Medi.png",
    title: "foo",
    description: "Medi"
  },
  {
    id: 34,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Zool.png",
    title: "foo",
    description: "Zool"
  },
  {
    id: 4,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Chem.png",
    title: "foo",
    description: "Chem"
  },
  {
    id: 11,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/GeHy.png",
    title: "foo",
    description: "GeHy"
  },
  {
    id: 16,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Metr.png",
    title: "foo",
    description: "Metr"
  },
  {
    id: 19,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Phys.png",
    title: "foo",
    description: "Phys"
  },
  {
    id: 31,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Thry.png",
    title: "foo",
    description: "Thry"
  },
  {
    id: 5,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Comp.png",
    title: "foo",
    description: "Comp"
  },
  {
    id: 6,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Coms.png",
    title: "foo",
    description: "Coms"
  },
  {
    id: 25,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Safe.png",
    title: "foo",
    description: "Safe"
  },
  {
    id: 29,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Supl.png",
    title: "foo",
    description: "Supl"
  },
  {
    id: 32,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Tran.png",
    title: "foo",
    description: "Tran"
  },
  {
    id: 7,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Devc.png",
    title: "foo",
    description: "Devc"
  },
  {
    id: 10,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Envr.png",
    title: "foo",
    description: "Envr"
  },
  {
    id: 22,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Prop.png",
    title: "foo",
    description: "Prop"
  },
  {
    id: 28,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Strc.png",
    title: "foo",
    description: "bStrcar"
  },
  {
    id: 33,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Wepn.png",
    title: "foo",
    description: "Wepn"
  },
  {
    id: 8,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Dipl.png",
    title: "foo",
    description: "Dipl"
  },
  {
    id: 14,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Logi.png",
    title: "foo",
    description: "Logi"
  },
  {
    id: 23,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Regs.png",
    title: "foo",
    description: "Regs"
  },
  {
    id: 24,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/RsRx.png",
    title: "foo",
    description: "RsRx"
  },
  {
    id: 27,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/SoAn.png",
    title: "foo",
    description: "SoAn"
  },
  {
    id: 12,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Gunr.png",
    title: "foo",
    description: "Gunr"
  },
  {
    id: 13,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Infl.png",
    title: "foo",
    description: "Infl"
  },
  {
    id: 17,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Mrdo.png",
    title: "foo",
    description: "Mrdo"
  },
  {
    id: 26,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Secr.png",
    title: "foo",
    description: "Secr"
  },
  {
    id: 30,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Tank.png",
    title: "foo",
    description: "Tank"
  }
];
const rankIcons = [
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/RankIcons/CaptainRankColonel.png",
    description: "Captain Colonel"
  },
  {
    id: 2,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/CaptainRankCommander.png",
    description: "Captian Commander"
  },
  {
    id: 3,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/CaptainRankLtColonel.png",
    description: "Captain Rank Lt Colonel"
  },
  {
    id: 4,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/CaptainRankLtCommander.png",
    description: "Captain Lt Commander"
  },
  {
    id: 5,
    src: "./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankCadet.png",
    description: "Enlisted Cadet"
  },
  {
    id: 6,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankCorporal.png",
    description: "Enlisted Corporal"
  },
  {
    id: 7,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankJuniorSgt.png",
    description: "Enlisted Junior Sgt"
  },
  {
    id: 8,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankMasterSgt.png",
    description: "Enlisted Master Sgt"
  },
  {
    id: 9,
    src: "./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankPrivate.png",
    description: "Enlisted Private"
  },
  {
    id: 10,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankSeniorSgt.png",
    description: "Enlisted Senior Sgt"
  },
  {
    id: 11,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankSgtMajor.png",
    description: "Enlisted Sgt Major"
  },
  {
    id: 12,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankStaffSgt.png",
    description: "Enlisted Staff Sgt"
  },
  {
    id: 13,
    src: "./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankCadet.png",
    description: "Officer Cadet"
  },
  {
    id: 14,
    src: "./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankColonel.png",
    description: "Officer Colonel"
  },
  {
    id: 15,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankCommander.png",
    description: "Officer Commander"
  },
  {
    id: 16,
    src: "./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankEnsign.png",
    description: "Officer Ensign"
  },
  {
    id: 17,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankJrLieutenant.png",
    description: "Officer Jr Lieutenant"
  },
  {
    id: 18,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankLieutenant.png",
    description: "Officer Lieutenant"
  },
  {
    id: 19,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankLtColonel.png",
    description: "Officer Lt Colonel"
  },
  {
    id: 20,
    src:
      "./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankLtCommander.png",
    description: "Officer Lt Commander"
  }
];
const functionIcons = [
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/FunctionIcons/AUTHORITY.png",
    title: "foo",
    description: "Authority"
  },
  {
    id: 2,
    src: "./assets/StarshipImages/SmallIcons/FunctionIcons/CHASSIS.png",
    title: "foo",
    description: "Chassis"
  },
  {
    id: 3,
    src: "./assets/StarshipImages/SmallIcons/FunctionIcons/CONFLICT.png",
    title: "foo",
    description: "Conflict"
  },
  {
    id: 4,
    src: "./assets/StarshipImages/SmallIcons/FunctionIcons/EFFICIENCY.png",
    title: "foo",
    description: "Efficiency"
  },
  {
    id: 5,
    src: "./assets/StarshipImages/SmallIcons/FunctionIcons/INVENTORY.png",
    title: "foo",
    description: "Inventory"
  },
  {
    id: 6,
    src: "./assets/StarshipImages/SmallIcons/FunctionIcons/MORALE.png",
    title: "foo",
    description: "Morale"
  },
  {
    id: 7,
    src: "./assets/StarshipImages/SmallIcons/FunctionIcons/RESEARCH.png",
    title: "foo",
    description: "Research"
  },
  {
    id: 8,
    src: "./assets/StarshipImages/SmallIcons/FunctionIcons/TRAVEL.png",
    title: "foo",
    description: "Travel"
  }
];
const motivationIcons = [
  {
    id: 1,
    src: "./assets/StarshipImages/MotivationIcons/AcquisitionIcon.png",
    title: "foo",
    description: "Acquisition"
  },
  {
    id: 2,
    src: "./assets/StarshipImages/MotivationIcons/BenevolenceIcon.png",
    title: "foo",
    description: "Benevolence"
  },
  {
    id: 3,
    src: "./assets/StarshipImages/MotivationIcons/ConformityIcon.png",
    title: "foo",
    description: "Conformity"
  },
  {
    id: 4,
    src: "./assets/StarshipImages/MotivationIcons/PowerIcon.png",
    title: "foo",
    description: "Power"
  },
  {
    id: 5,
    src: "./assets/StarshipImages/MotivationIcons/ProtectionIcon.png",
    title: "foo",
    description: "Protection"
  },
  {
    id: 6,
    src: "./assets/StarshipImages/MotivationIcons/SelfDirectionIcon.png",
    title: "foo",
    description: "Self Direction"
  },
  {
    id: 7,
    src: "./assets/StarshipImages/MotivationIcons/StimulationIcon.png",
    title: "foo",
    description: "Stimulation"
  },
  {
    id: 8,
    src: "./assets/StarshipImages/MotivationIcons/UniversalismIcon.png",
    title: "foo",
    description: "Universalism"
  }
];
const divisionIcons = [
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/DivisionIcons/ENG.svg",
    title: "ENG",
    description: "ENG"
  },
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/DivisionIcons/SCI.svg",
    title: "SCI",
    description: "SCI"
  },
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/DivisionIcons/OPS.svg",
    title: "OPS",
    description: "OPS"
  },
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/DivisionIcons/HEL.svg",
    title: "HEL",
    description: "HEL"
  },
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/DivisionIcons/FLI.svg",
    title: "FLI",
    description: "FLI"
  },
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/DivisionIcons/ENG.svg",
    title: "ENG",
    description: "ENG"
  },
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/DivisionIcons/CMD.svg",
    title: "CMD",
    description: "CMD"
  },
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/DivisionIcons/TAC.svg",
    title: "TAC",
    description: "TAC"
  }
];
const raceIcons = [
  {
    id: 1,
    src: "./assets/CrewImages/driidanzFemale.png",
    title: "ENG",
    description: "ENG"
  },
  {
    id: 2,
    src: "./assets/CrewImages/driidanzMale.png",
    title: "ENG",
    description: "ENG"
  }
];
const healthIcons = [
  {
    id: 1,
    src: "./assets/HealthImages/Injury0.png",
    title: "foo",
    description: "Astr"
  },
  {
    id: 1,
    src: "./assets/HealthImages/Injury1.png",
    title: "foo",
    description: "Astr"
  },
  {
    id: 1,
    src: "./assets/HealthImages/Injury2.png",
    title: "foo",
    description: "Astr"
  },
  {
    id: 1,
    src: "./assets/HealthImages/Injury3.png",
    title: "foo",
    description: "Astr"
  },
  {
    id: 1,
    src: "./assets/HealthImages/Injury.png",
    title: "foo",
    description: "Astr"
  }
];
const damageIcons = [
  {
    id: 1,
    src: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Astr.png",
    title: "foo",
    description: "Astr"
  }
];
const stressIcons = [
  {
    id: 1,
    src: "./assets/HealthImages/Stress0.png",
    title: "foo",
    description: "Astr"
  },
  {
    id: 2,
    src: "./assets/HealthImages/Stress1.png",
    title: "foo",
    description: "Astr"
  },
  {
    id: 3,
    src: "./assets/HealthImages/Stress2.png",
    title: "foo",
    description: "Astr"
  },
  {
    id: 4,
    src: "./assets/HealthImages/Stress3.png",
    title: "foo",
    description: "Astr"
  },
  {
    id: 5,
    src: "./assets/HealthImages/Stress.png",
    title: "foo",
    description: "Astr"
  }
];

function loadIcons(cat) {
  switch (cat) {
    case "meeple":
      return meepleIcons;
    case "department":
      return departmentIcons;
    case "rank":
      return rankIcons;
    case "function":
      return functionIcons;
    case "motivation":
      return motivationIcons;
    case "division":
      return divisionIcons;
    case "race":
      return raceIcons;
    case "health":
      return healthIcons;
    case "damage":
      return damageIcons;
    case "stress":
      return stressIcons;

    default:
      return null;
  }
}

export default loadIcons;
