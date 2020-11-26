var APP_DATA = {
  "scenes": [
    {
      "id": "0-bc---introduo",
      "name": "BC - Introdução",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.8742705504210413,
        "pitch": 0,
        "fov": 1.3333127936580627
      },
      "linkHotspots": [        
        {
        "yaw": -1.4709512720305753,
        "pitch": 0.2806072726455952,
        "rotation": 7.853981633974483,
        "target": "1-bc---entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bc---entrada",
      "name": "BC - Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.1230006121685054,
        "pitch": 0,
        "fov": 1.3333127936580627
      },
      "linkHotspots": [
        {
          "yaw": -1.4709512720305753,
          "pitch": 0.11806072726455952,
          "rotation": 7.853981633974483,
          "target": "2-bc---hall-de-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4455102400442517,
          "pitch": -0.01749881793661956,
          "title": "Reitoria - UFSC",
          "text": "Endereço Eletrônico: gr@contato.ufsc.br"
        },
        {
          "yaw": -2.7650942904781637,
          "pitch": 0.020369860826260577,
          "title": "Coordenadoria de Inclusão Digital",
          "text": "Antigo LabUFSC"
        }
      ]
    },
    {
      "id": "2-bc---hall-de-entrada",
      "name": "BC - Hall de entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.006353793542258401,
        "pitch": 0,
        "fov": 1.3333127936580627
      },
      "linkHotspots": [
        {
          "yaw": 2.9310926770881522,
          "pitch": 0.05348310385819133,
          "rotation": 6.283185307179586,
          "target": "1-bc---entrada"
        },
        {
          "yaw": -0.4144442013773446,
          "pitch": -0.22513195378207485,
          "rotation": 1.5707963267948966,
          "target": "4-bc---balco-de-emprstimo"
        },
        {
          "yaw": -0.2586490623312656,
          "pitch": 0.03614748499428799,
          "rotation": 4.71238898038469,
          "target": "3-bc---catraca"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5113366918341793,
          "pitch": 0.009916344007754319,
          "title": "Armários",
          "text": "Guarde sua mochila nos armários antes de entrar na Biblioteca."
        }
      ]
    },
    {
      "id": "3-bc---catraca",
      "name": "BC - Catraca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.000055130480500764634,
        "pitch": 0,
        "fov": 1.3333127936580627
      },
      "linkHotspots": [
        {
          "yaw": 1.3650256660201396,
          "pitch": 0.10402844653882681,
          "rotation": 0,
          "target": "4-bc---balco-de-emprstimo"
        },
        {
          "yaw": 0.35,
          "pitch": 0.04216469792605437,
          "rotation": 7.853981633974483,
          "target": "2-bc---hall-de-entrada"
          }
      ],
      "infoHotspots": [
        {
          "yaw": -0.22858881928686614,
          "pitch": 0.04216469792605437,
          "title": "Armários",
          "text": "Antes de passar pela catraca, guarde mochilas e similares no armário."
        },
        {
          "yaw": 2.7642798987840056,
          "pitch": 0.00678691679555854,
          "title": "Reprografia",
          "text": ""
        },
        {
          "yaw": -1.5604319965332571,
          "pitch": -0.318845883474955,
          "title": "Andar térreo",
          "text": "- LABORIN<div>- Acessibilidade Informacional<br><div>- Sala de estudo individual</div><div>- Secretaria/Direção</div><div>- DECTI</div><div>- TECDI</div><div>- Portal de periódicos</div><div>- Periódicos</div></div>"
        }
      ]
    },
    {
      "id": "4-bc---balco-de-emprstimo",
      "name": "BC - Balcão de empréstimo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.2085949226896133,
        "pitch": 0,
        "fov": 1.3333127936580627
      },
      "linkHotspots": [
        {
          "yaw": -1.44379291155804,
          "pitch": 0.07341668333359408,
          "rotation": 0,
          "target": "3-bc---catraca"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.07701347237236,
          "pitch": 0.18740207969384315,
          "title": "Teses e dissertações - UFSC",
          "text": ""
        },
        {
          "yaw": 1.7849317483505853,
          "pitch": 0.04463241364434367,
          "title": "Coleções especiais",
          "text": "Audiovisuais e mapas"
        }
      ]
    }
  ],
  "name": "UFSC - Biblioteca Central",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
