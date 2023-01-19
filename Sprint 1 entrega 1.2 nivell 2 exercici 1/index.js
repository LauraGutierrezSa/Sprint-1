const objectAttribute = "red";

const objectMaker = () => {
    const createdObject = {
        objName: "Laura",
        objAge: 35,
        objHairColor: objectAttribute,
        objHasChildren: true
    }
    const result = createdObject;
    console.log(result)
};

objectMaker();
