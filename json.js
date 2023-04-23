var FindingObservation={
    "resourceType": "Observation",
    "id": "51870e95-691b-489b-8b54-adc32ee131ee",
    "meta": {
     "versionId": "2",
     "lastUpdated": "2023-03-21T22:09:12.343+08:00",
     "source": "#0uNKFzbRLMB1zxAp",
     "profile": [ "https://203.64.84.150:58443/r5/fhir/StructureDefinition/ImageFindingObservationSDR4" ]
    },
    "text": {
     "status": "generated",
     "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">This is an image finding measurement</div>"
    },
    "extension": [ {
     "url": "https://203.64.84.150:58443/r5/fhir/StructureDefinition/FindingIDR4",
     "valueIdentifier": {
     "system":"https://docs.google.com/spreadsheets/d/1BBBZZbEO82wkvLbHtbpa4ihdFTMoIG0KQGH5bgUoo70/edit#gid=896973653",
     "value": "S2023-00135"
     }
    }],
    "status": "final",
    "category": [ {
    "coding": [ {
    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
    "code": "imaging",
    "display": "Imaging"
    } ]
    } ],
    "code": {
    "coding": [ {
    "system":
    "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
    "code": "image.finding",
    "display": "Image finding"
    } ]
    },
    "subject": {
    "reference": "Patient/9013799",
    "display": "楊怡婷"
    },
    "effectiveDateTime": "2015-02-07T13:28:17-05:00",
    "performer": [ {
    "reference": "Practitioner/9013800",
    "display": "Dr. Adam Careful"
    } ],
    "bodySite": {
        "coding": [ {
        "system": "http://snomed.info/sct",
        "code": "7769000",
        "display": "Right foot"
        } ] 
    },
    "component": [ {
        "code": {
        "coding": [ {
        "system":
       "https://drive.google.com/file/d/1-eVBEUXecAm9pRE-bZwkUsogCu-Q4Rdh/view?usp=share_link",
        "code": "image.finding.keyimage"
        } ]
        },
        "valueString":"https://203.64.84.150:58443/r5/fhir/DocumentReference/665f781e-5666-4e22-a3c9-638d23ca1043"
       } ,
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Baseline cardiac rhythm"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Examination quality"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Limitations"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "right pulmonary veins"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "left pulmonary veins"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Pulmonary vein stenosis"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Right superior"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Right inferior"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Left superior"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Left inferior"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Left atrium size"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Left atrium lumen"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Coronary arteries"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "IVC anomalies"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Pulmonary artery caliber"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Pulmonary artery diameter"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Pulmonary emboli"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Thoracic aorta"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Lungs"
            } ]
        },
        "valueString":""
       },
       {
        "code": {
            "coding": [ {
                "system":"CodeSystem/TCUMIH707",
                "code": "Upper abdomen"
            } ]
        },
        "valueString":""
       }
    ]}
function postData(jsonString, type) {
    var xhttp = new XMLHttpRequest();
    var fhirUrl="http://hapi.fhir.org/baseR4"
    var url = fhirUrl +"/"+type;
    xhttp.open("POST", url, false);
    xhttp.setRequestHeader("Content-type", 'application/json+fhir');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) 
        {
            ret = JSON.parse(this.responseText);
            alert(this.responseText);
        }
    };
    var data = JSON.stringify(jsonString);
    xhttp.send(data);
    }
   
function Submit()
{
    //把網頁輸入的資料填入JSON
    FindingObservation.component[1].valueString=document.getElementsByName("Baseline cardiac rhythm").value;
    FindingObservation.component[2].valueString=document.getElementsByName("Examination quality").value;
    FindingObservation.component[3].valueString=document.getElementsByName("Limitations").value;
    FindingObservation.component[4].valueString=document.getElementsByName("right pulmonary veins").value;
    FindingObservation.component[5].valueString=document.getElementsByName("left pulmonary veins").value;
    FindingObservation.component[6].valueString=document.getElementsByName("Pulmonary vein stenosis").value;
    FindingObservation.component[7].valueString=document.getElementsByName("Right superior").value;
    FindingObservation.component[8].valueString=document.getElementsByName("Right inferior").value;
    FindingObservation.component[9].valueString=document.getElementsByName("Left superior").value;
    FindingObservation.component[10].valueString=document.getElementsByName("Left inferior").value;
    FindingObservation.component[11].valueString=document.getElementsByName("Left atrium size").value;
    FindingObservation.component[12].valueString=document.getElementsByName("Left atrium lumen").value;
    FindingObservation.component[13].valueString=document.getElementsByName("Coronary arteries").value;
    FindingObservation.component[14].valueString=document.getElementsByName("IVC anomalies").value;
    FindingObservation.component[15].valueString=document.getElementsByName("Pulmonary artery caliber").value;
    FindingObservation.component[16].valueString=document.getElementsByName("Pulmonary artery diameter").value;
    FindingObservation.component[17].valueString=document.getElementsByName("Pulmonary emboli").value;
    FindingObservation.component[18].valueString=document.getElementsByName("Thoracic aorta").value;
    FindingObservation.component[19].valueString=document.getElementsByName("Lungs").value;
    FindingObservation.component[20].valueString=document.getElementsByName("Upper abdomen").value;
    postData(FindingObservation,"Observation")    //把JSON上傳到FHIR伺服器
}
       